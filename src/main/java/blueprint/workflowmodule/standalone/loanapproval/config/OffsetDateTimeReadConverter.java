package blueprint.workflowmodule.standalone.loanapproval.config;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

/**
 * Used for proper formatting of OffsetDateTime stored into MongoDB
 */
public class OffsetDateTimeReadConverter implements Converter<Date, OffsetDateTime> {

    @Override
    public OffsetDateTime convert(
            final Date source) {

        // MongoDB stores times in UTC by default
        return ZonedDateTime
                .ofInstant(source.toInstant(), ZoneOffset.UTC)
                .withZoneSameInstant(ZoneId.systemDefault())
                .toOffsetDateTime();

    }

}
