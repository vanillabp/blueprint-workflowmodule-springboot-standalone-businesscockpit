package blueprint.workflowmodule.standalone.loanapproval.user;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import io.vanillabp.cockpit.commons.security.jwt.JwtAuthenticationToken;
import io.vanillabp.cockpit.commons.security.jwt.JwtUserDetailsProvider;
import io.vanillabp.cockpit.commons.security.usercontext.UserDetails;
import lombok.RequiredArgsConstructor;

/**
 * The UserDetailsProvider is used by {@link io.vanillabp.cockpit.commons.security.usercontext.UserContext}
 * which wraps {@link SecurityContextHolder#getContext()} to provide a rich
 * {@link io.vanillabp.cockpit.commons.security.usercontext.UserDetails} object.
 *
 * It uses the {@link BlueprintUserService} to load user details typically not stored in the security token (JWT)
 * and maps them to the Business Cockpit's user details class.
 *
 * @see BlueprintUserService
 */
@RequiredArgsConstructor
public class BlueprintUserDetailsProvider extends JwtUserDetailsProvider {

    /**
     *
     */
    private final BlueprintUserService blueprintUserService;

    public UserDetails getUserDetails(
            final Authentication authentication) {

        if (authentication instanceof JwtAuthenticationToken jwtAuthentication) {
            final var userId = jwtAuthentication.getJwt().getSubject();
            final var user = blueprintUserService.getUser(userId);
            if (user == null) {
                throw new RuntimeException("Unknown user '" + userId + "'!");
            }
            return new UserDetailsImpl(
                    user.getId(), user.getEmail(), user.getDisplay(), user.getDisplayShort(), user.getAuthorities());
        } else {
            throw new RuntimeException(
                    "Unexpected authentication type '" + authentication.getClass()
                            .getName() + "', '" + JwtAuthenticationToken.class.getName() + "' expected!");
        }

    }

}
