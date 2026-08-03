package blueprint.workflowmodule.standalone.loanapproval.model;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

/**
 * The wire and storage format of the polymorphic {@link TaskData}, pinned down for the move to Spring
 * Boot 4 and Jackson 3.
 *
 * <p>Two independent serializers touch this type, and they belong to different Jackson generations:
 *
 * <ul>
 * <li>Spring's mapper, now Jackson <b>3</b>, produces the form data that travels to the cockpit and the
 * dev shell;</li>
 * <li>hypersistence-utils' {@code JsonType} writes the {@code data} column of {@link Task} and is built on
 * Jackson <b>2</b>.</li>
 * </ul>
 *
 * <p>If the two ever disagree about the {@code taskType} discriminator, form data written through one path
 * cannot be read through the other - and existing rows become unreadable without a single error at
 * start-up. The literal below was taken from the Spring Boot 3 / Jackson 2 build before the migration.
 */
class TaskDataSerializationTest {

    private static final String GOLDEN_SAMPLE = "{\"taskType\":\"AssessRiskFormData\",\"riskAcceptable\":true}";

    private final tools.jackson.databind.json.JsonMapper jackson3 = tools.jackson.databind.json.JsonMapper.builder()
            .build();

    private final com.fasterxml.jackson.databind.ObjectMapper jackson2 = new com.fasterxml.jackson.databind.ObjectMapper();

    private TaskData taskData() {

        return new AssessRiskFormData(Boolean.TRUE);

    }

    /**
     * The declared type matters: only when serializing as {@code TaskData} does Jackson write the type
     * discriminator. Both generations have to produce the same bytes.
     */
    @Test
    void bothJacksonGenerationsProduceTheSameJson() throws Exception {

        assertThat(jackson3.writerFor(TaskData.class).writeValueAsString(taskData()))
                .isEqualTo(GOLDEN_SAMPLE);
        assertThat(jackson2.writerFor(TaskData.class).writeValueAsString(taskData()))
                .isEqualTo(GOLDEN_SAMPLE);

    }

    /**
     * The subtype carries no {@code @JsonTypeName}, so the discriminator is derived from the class name.
     * That derivation is Jackson's, not ours - a change in it would rename the type in every stored
     * document.
     */
    @Test
    void theDiscriminatorIsTheSimpleClassName() {

        assertThat(GOLDEN_SAMPLE).contains("\"taskType\":\"" + AssessRiskFormData.class.getSimpleName() + "\"");

    }

    @Test
    void eachGenerationReadsWhatTheOtherWrote() throws Exception {

        final var writtenByJackson3 = jackson3.writerFor(TaskData.class).writeValueAsString(taskData());
        final var writtenByJackson2 = jackson2.writerFor(TaskData.class).writeValueAsString(taskData());

        assertThat(jackson3.readValue(writtenByJackson2, TaskData.class))
                .isInstanceOf(AssessRiskFormData.class);
        assertThat(jackson2.readValue(writtenByJackson3, TaskData.class))
                .isInstanceOf(AssessRiskFormData.class);

    }

    /**
     * Reading the literal is the direction that guards existing data: rows written by earlier versions of
     * this workflow module carry exactly this JSON.
     */
    @Test
    void storedDataIsStillRead() throws Exception {

        assertThat(((AssessRiskFormData) jackson3.readValue(GOLDEN_SAMPLE, TaskData.class)).getRiskAcceptable())
                .isTrue();
        assertThat(((AssessRiskFormData) jackson2.readValue(GOLDEN_SAMPLE, TaskData.class)).getRiskAcceptable())
                .isTrue();

    }

}
