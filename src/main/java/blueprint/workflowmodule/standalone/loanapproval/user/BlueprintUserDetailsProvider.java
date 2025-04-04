package blueprint.workflowmodule.standalone.loanapproval.user;

import org.springframework.security.core.Authentication;

import io.vanillabp.cockpit.commons.security.jwt.JwtAuthenticationToken;
import io.vanillabp.cockpit.commons.security.jwt.JwtUserDetailsProvider;
import io.vanillabp.cockpit.commons.security.usercontext.UserDetails;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class BlueprintUserDetailsProvider extends JwtUserDetailsProvider {

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
