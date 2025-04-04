package blueprint.workflowmodule.standalone.loanapproval.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import blueprint.workflowmodule.standalone.loanapproval.user.BlueprintUserDetailsProvider;
import blueprint.workflowmodule.standalone.loanapproval.user.BlueprintUserService;
import io.vanillabp.cockpit.adapter.common.properties.VanillaBpCockpitProperties;
import io.vanillabp.cockpit.commons.security.jwt.JwtAuthenticationToken;
import io.vanillabp.cockpit.commons.security.jwt.JwtMapper;
import io.vanillabp.cockpit.commons.security.jwt.JwtUserDetailsProvider;
import io.vanillabp.cockpit.commons.security.jwt.PassiveJwtSecurityFilter;
import io.vanillabp.cockpit.commons.security.usercontext.UserContext;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig {


    @Autowired
    private VanillaBpCockpitProperties cockpitProperties;
    @Autowired
    private BlueprintUserService blueprintUserService;

    @Bean
    public JwtMapper<? extends JwtAuthenticationToken> jwtMapper() {
        return new blueprint.workflowmodule.standalone.loanapproval.config.JwtMapper(
                cockpitProperties.getCockpit().getJwt(), blueprintUserService);
    }

    @Bean
    public PassiveJwtSecurityFilter passiveJwtSecurityFilter(
            final JwtMapper<? extends JwtAuthenticationToken> jwtMapper) {
        return new PassiveJwtSecurityFilter(cockpitProperties.getCockpit().getJwt(), jwtMapper);
    }

    @Bean
    public JwtUserDetailsProvider jwtUserDetailsProvider() {
        return new BlueprintUserDetailsProvider(blueprintUserService);
    }

    @Bean
    public UserContext userContext(
            final JwtUserDetailsProvider userDetailsProvider) {
        return new UserContext(userDetailsProvider);
    }

    @Bean
    @Order(999) // allow other securities from workflow-modules to run first
    public SecurityFilterChain filterChain(
            final HttpSecurity http,
            final PassiveJwtSecurityFilter jwtSecurityFilter) throws Exception {
        return http.csrf(AbstractHttpConfigurer::disable)
                .cors(AbstractHttpConfigurer::disable)
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin))
                .anonymous(AbstractHttpConfigurer::disable)
                .addFilterAfter(jwtSecurityFilter, BasicAuthenticationFilter.class)
                .build();
    }
}
