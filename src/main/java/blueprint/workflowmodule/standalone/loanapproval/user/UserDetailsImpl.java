package blueprint.workflowmodule.standalone.loanapproval.user;

import java.util.List;

import io.vanillabp.cockpit.commons.security.usercontext.UserDetails;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class UserDetailsImpl implements UserDetails {
    private final String id;
    private final String email;
    private final String display;
    private final String displayShort;
    private final List<String> authorities;
}
