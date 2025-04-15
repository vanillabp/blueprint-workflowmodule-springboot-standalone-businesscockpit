package blueprint.workflowmodule.standalone.loanapproval.user;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestClient;


/**
 * Service for managing user information by communicating with the user API.
 * Handles retrieving and converting user data to appropriate internal representations.
 */
@Service
public class BlueprintUserService {

    private final RestClient restClient;

    private static final Logger logger = LoggerFactory.getLogger(BlueprintUserService.class);

    /**
     * Creates a new BlueprintUserService with the specified RestClient builder.
     *
     * @param restClientBuilder The builder used to create a RestClient with configured base URL.
     */
    public BlueprintUserService(RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder.baseUrl("http://localhost:8079/dev-shell/user").build();
    }

    /**
     * Retrieves user details for a specific user by their ID.
     *
     * @param userId The ID of the user to retrieve.
     * @return A UserDetailsImpl instance containing formatted user information.
     */
    /**
     * Retrieves user details for a specific user by their ID.
     *
     * @param userId The ID of the user to retrieve.
     * @return A UserDetailsImpl instance containing formatted user information,
     *         or null if the user is not found.
     */
    public UserDetailsImpl getUser(
            final String userId) {
        // Retrieve all users from the /all endpoint
        List<UserRepresentation> allUsers = this.restClient.get()
                .uri("/all")
                .retrieve()
                .body(new ParameterizedTypeReference<List<UserRepresentation>>() {
                });

        if (allUsers == null) {
            logger.warn("No users returned from /user/all endpoint");
            return null;
        }

        // Find the specific user by ID
        UserRepresentation user = allUsers.stream()
                .filter(u -> userId.equals(u.getId()))
                .findFirst()
                .orElse(null);

        if (user == null) {
            logger.warn("User with ID {} not found", userId);
            return null;
        }

        logger.info("Found user: {}", user);

        // Convert to UserDetailsImpl
        return toUser(user);
    }

    /**
     * Retrieves details for all available users.
     *
     * @return A list of UserDetailsImpl objects containing formatted user information.
     */
    public List<UserDetailsImpl> getAllUsers() {
        List<UserRepresentation> users = this.restClient.get()
                .uri("/all")
                .retrieve()
                .body(new ParameterizedTypeReference<List<UserRepresentation>>() {
                });

        logger.info(Objects.requireNonNull(users).toString());

        return users != null ? users.stream()
                .map(this::toUser)
                .collect(Collectors.toList()) : null;
    }

    /**
     * Converts a UserRepresentation object from the API to a UserDetailsImpl object 
     * with formatted display names.
     *
     * @param user The UserRepresentation object to convert.
     * @return A UserDetailsImpl object with properly formatted display fields.
     */
    private UserDetailsImpl toUser(
            UserRepresentation user) {
        if (user == null) {
            return null;
        }

        // Format user details to display
        final var display = !StringUtils.hasText(user.getLastName())
                ? user.getId()
                : !StringUtils.hasText(user.getFirstName())
                        ? user.getLastName()
                        : user.getLastName() + ", " + user.getFirstName();

        // Format user details to displayShort
        final var displayShort = !StringUtils.hasText(user.getLastName())
                ? user.getId()
                : !StringUtils.hasText(user.getFirstName())
                        ? user.getLastName()
                        : user.getLastName() + ", " + user.getFirstName().charAt(0) + ".";

        // Create and return the user details implementation
        return new UserDetailsImpl(
                user.getId(), user.getEmail(), display, displayShort, user.getGroups() != null ? user.getGroups()
                        : new ArrayList<>()
        );
    }
}