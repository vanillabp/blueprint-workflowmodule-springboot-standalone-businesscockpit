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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import blueprint.workflowmodule.standalone.loanapproval.user.BlueprintUserDetailsProvider;
import blueprint.workflowmodule.standalone.loanapproval.user.BlueprintUserService;
import io.vanillabp.cockpit.adapter.common.properties.VanillaBpCockpitProperties;
import io.vanillabp.cockpit.commons.security.jwt.JwtAuthenticationToken;
import io.vanillabp.cockpit.commons.security.jwt.JwtMapper;
import io.vanillabp.cockpit.commons.security.jwt.JwtUserDetailsProvider;
import io.vanillabp.cockpit.commons.security.jwt.PassiveJwtSecurityFilter;
import io.vanillabp.cockpit.commons.security.usercontext.UserContextConfiguration;

/**
 * Enables security. For workflow modules the current user is passed via security token (JWT)
 * which is created by the Business Cockpit on login.
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig extends UserContextConfiguration {

    @Autowired
    private VanillaBpCockpitProperties cockpitProperties;

    @Autowired
    private BlueprintUserService blueprintUserService;

    /**
     * Used to map values from a security token (JWT) to a user.
     */
    @Bean
    public JwtMapper<? extends JwtAuthenticationToken> jwtMapper() {

        return new blueprint.workflowmodule.standalone.loanapproval.config.JwtMapper(
                cockpitProperties.getCockpit().getJwt(), blueprintUserService);

    }

    /**
     * In the workflow module no new tokens are created. So, it is not supported to map a user
     * to a security token, because this should never happen.
     *
     * @param jwtMapper The JWT mapper
     * @return The filter to be configured for applying the Sprint security context based on incoming security token
     */
    @Bean
    public PassiveJwtSecurityFilter passiveJwtSecurityFilter(
            final JwtMapper<? extends JwtAuthenticationToken> jwtMapper) {

        return new PassiveJwtSecurityFilter(cockpitProperties.getCockpit().getJwt(), jwtMapper);

    }

    /**
     * Creates a user details provider used by {@link io.vanillabp.cockpit.commons.security.usercontext.UserContext}.
     * This wraps {@link SecurityContextHolder#getContext()} to provide a rich
     * {@link io.vanillabp.cockpit.commons.security.usercontext.UserDetails} object.
     *
     * @return The user details provider.
     */
    @Bean
    public JwtUserDetailsProvider jwtUserDetailsProvider() {

        return new BlueprintUserDetailsProvider(blueprintUserService);

    }

    /**
     * Applies the security context filter for security.
     *
     * @param http Spring HTTP security
     * @param jwtSecurityFilter The JWT security filter
     * @return The configured filter chain
     * @throws Exception Unexpected error
     */
    @Bean
    @Order(999) // allow other securities from workflow-modules to run first
    public SecurityFilterChain filterChain(
            final HttpSecurity http,
            final PassiveJwtSecurityFilter jwtSecurityFilter) throws Exception {

        return http
                .securityMatcher()
                .csrf(AbstractHttpConfigurer::disable)
                .cors(AbstractHttpConfigurer::disable)
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin))
                .anonymous(AbstractHttpConfigurer::disable)
                .addFilterAfter(jwtSecurityFilter, BasicAuthenticationFilter.class)
                .build();

    }

}
