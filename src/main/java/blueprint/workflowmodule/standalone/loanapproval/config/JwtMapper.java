package blueprint.workflowmodule.standalone.loanapproval.config;

import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtValidationException;

import blueprint.workflowmodule.standalone.loanapproval.user.BlueprintUserService;
import io.vanillabp.cockpit.commons.security.jwt.JwtAuthenticationToken;
import io.vanillabp.cockpit.commons.security.jwt.JwtProperties;
import lombok.extern.slf4j.Slf4j;

/**
 * Used to map values from a security token (JWT) to a user.
 */
@Slf4j
public class JwtMapper extends io.vanillabp.cockpit.commons.security.jwt.JwtMapper<JwtAuthenticationToken> {

    private final BlueprintUserService blueprintUserService;

    public JwtMapper(
                     final JwtProperties properties, final BlueprintUserService blueprintUserService) {

        super(properties);
        this.blueprintUserService = blueprintUserService;

    }

    @Override
    public Logger getLogger() {

        return log;

    }

    /**
     * Build a Spring Security user object according to the security token given (JWT).
     * Additionally to the authorities stored in the security token (JWT), groups
     * the user belongs to are added as authorities. All these authorities can be used
     * to protect resources (e.g. REST-endpoints, methods of Spring beans) either
     * programmatically or in a declarative way.
     *
     * @param jwt The security token provided
     * @param bcAuthorities The collection of authorities to be filled
     * @return The Spring Security user object according to the security token provided
     */
    @Override
    protected JwtAuthenticationToken buildAuthenticationToken(
            final Jwt jwt,
            final Collection<GrantedAuthority> bcAuthorities) {

        final var authorities = jwt.getClaimAsStringList(AUTHORITIES_CLAIM);
        addAuthorities(bcAuthorities, authorities);

        // user authorities are usually not stored in the jwt and must be retrieved via user service
        final var user = blueprintUserService.getUser(jwt.getSubject());
        if (user == null) {
            throw new JwtValidationException("Unknown user found in JWT: %s".formatted(jwt.getSubject()), List
                    .of(new OAuth2Error("000")));
        }
        final var groups = user.getAuthorities();
        addAuthorities(bcAuthorities, groups);

        return new JwtAuthenticationToken(jwt, bcAuthorities);

    }

    private static void addAuthorities(
            final Collection<GrantedAuthority> bcAuthorities,
            final List<String> authorities) {

        if (authorities == null) {
            return;
        }

        authorities.stream().map(SimpleGrantedAuthority::new).forEach(bcAuthorities::add);

    }

    /**
     * In Business Cockpit the mapper is also used after login to map from the user details to the token.
     * In the workflow module no new tokens are created. So, it is not supported to map a user
     * to a security token, because this should never happen.
     *
     * @param claimsSetBuilder The JWT claims build
     * @param context The security context
     */
    @Override
    protected void applyJwtClaimsSet(
            final JwtClaimsSet.Builder claimsSetBuilder,
            final SecurityContext context) {

        throw new UnsupportedOperationException();

    }

}
