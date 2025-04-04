package blueprint.workflowmodule.standalone.loanapproval.config;

import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;

import blueprint.workflowmodule.standalone.loanapproval.user.BlueprintUserService;
import io.vanillabp.cockpit.commons.security.jwt.JwtAuthenticationToken;
import io.vanillabp.cockpit.commons.security.jwt.JwtProperties;

public class JwtMapper extends io.vanillabp.cockpit.commons.security.jwt.JwtMapper<JwtAuthenticationToken> {

    private static final Logger logger = LoggerFactory.getLogger(JwtMapper.class);
    private final BlueprintUserService blueprintUserService;

    public JwtMapper(final JwtProperties properties, final BlueprintUserService blueprintUserService) {
        super(properties);
        this.blueprintUserService = blueprintUserService;
    }

    @Override
    public Logger getLogger() {
        return logger;
    }

    @Override
    protected JwtAuthenticationToken buildAuthenticationToken(
            final Jwt jwt,
            final Collection<GrantedAuthority> bcAuthorities) {

        final var authorities = jwt.getClaimAsStringList(AUTHORITIES_CLAIM);
        addAuthorities(bcAuthorities, authorities);

        // user authorities are usually not stored in the jwt and must be retrieved via user service
        List<String> groups = blueprintUserService.getUser(jwt.getSubject()).getAuthorities();
        addAuthorities(bcAuthorities, groups);

        return new JwtAuthenticationToken(jwt, bcAuthorities);
    }

    private static void addAuthorities(
            Collection<GrantedAuthority> bcAuthorities,
            List<String> authorities) {
        if (authorities != null) {
            authorities.stream().map(SimpleGrantedAuthority::new).forEach(bcAuthorities::add);
        }
    }

    @Override
    protected void applyJwtClaimsSet(
            final JwtClaimsSet.Builder claimsSetBuilder,
            final SecurityContext context) {

        throw new UnsupportedOperationException();
    }
}
