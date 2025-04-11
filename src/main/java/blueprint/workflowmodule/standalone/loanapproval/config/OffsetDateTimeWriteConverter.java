package blueprint.workflowmodule.standalone.loanapproval.config;

import java.time.OffsetDateTime;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

/**
 * Used for proper formatting of OffsetDateTime stored into MongoDB
 */
public class OffsetDateTimeWriteConverter implements Converter<OffsetDateTime, Date> {

    @Override
    public Date convert(
            final OffsetDateTime source) {

        return Date
                .from(source
                        .toInstant());

    }

}
