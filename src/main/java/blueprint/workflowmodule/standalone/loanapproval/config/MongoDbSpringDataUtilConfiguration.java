package blueprint.workflowmodule.standalone.loanapproval.config;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.domain.EntityScanner;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.annotation.Persistent;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.MongoManagedTypes;
import org.springframework.data.mongodb.MongoTransactionManager;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.lang.Nullable;
import org.springframework.transaction.PlatformTransactionManager;

import io.vanillabp.springboot.utils.MongoDbSpringDataUtil;

/**
 * Configuration of MongoDB
 */
@Configuration
public class MongoDbSpringDataUtilConfiguration {

    /**
     * When running Camunda 7 a JDBC data-source is needed for persistence of process state.
     *
     * @param dataSourceProperties The properties configured
     * @return The Datasource created
     * @throws ClassNotFoundException Thrown if HikariDataSource class is not available in classpath
     */
    @Bean
    @ConditionalOnProperty("spring.datasource.url")
    public DataSource camundaBpmDataSource(
            final DataSourceProperties dataSourceProperties) throws ClassNotFoundException {

        // loading using reflection because this class is also executed
        // for Maven profile camunda 8 which does not include HikariCP
        @SuppressWarnings("unchecked")
        final var hikariCP = (Class<DataSource>) getClass().getClassLoader().loadClass(
                "com.zaxxer.hikari.HikariDataSource");

        return dataSourceProperties
                .initializeDataSourceBuilder()
                .type(hikariCP)
                .build();

    }

    /**
     * When running Camunda 7 a separate transaction manager is needed for persistence of process state.
     *
     * @param dataSource The DataSource used for Camunda persistence
     * @return The Camunda transaction manager
     */
    @Bean
    @ConditionalOnProperty("spring.datasource.url")
    public PlatformTransactionManager camundaBpmTransactionManager(
            @Qualifier("camundaBpmDataSource") DataSource dataSource) {

        return new DataSourceTransactionManager(dataSource);

    }

    /**
     * When using Camunda 8 eventual consistency is happening. A transaction manager
     * is required to minimize effects of eventual consistency.
     *
     * @param dbFactory The MongoDatabaseFactory used for MongoDB transactions
     * @return The MongoTransactionManager
     * @see https://github.com/camunda-community-hub/vanillabp-camunda8-adapter/blob/main/spring-boot/README.md#transaction-behavior
     */
    @Bean
    @Primary
    public MongoTransactionManager transactionManager(
            final MongoDatabaseFactory dbFactory) {

        return new MongoTransactionManager(dbFactory);

    }

    /**
     * Also register @TypeAlias annotated classes to be found by Spring Data entity scanner.
     *
     * @see org.springframework.data.annotation.TypeAlias
     */
    @Bean
    public MongoManagedTypes mongoManagedTypes(
            ApplicationContext applicationContext) throws ClassNotFoundException {

        return MongoManagedTypes.fromIterable(
                new EntityScanner(applicationContext).scan(Persistent.class));
    }

    /**
     * The SpringDataUtil is used by VanillaBP behind the scenes for aggregate handling.
     *
     * @param applicationContext The Spring application context
     * @param mongoDbFactory The MongoDatabaseFactory used to get meta-information about aggregates
     * @param mongoConverter The MongoConverter used to get meta-information about aggregates
     * @return The Spring Data utility
     */
    @Bean
    public MongoDbSpringDataUtil mongoDbSpringDataUtil(
            final ApplicationContext applicationContext,
            final MongoDatabaseFactory mongoDbFactory,
            @Nullable final MongoConverter mongoConverter) {

        return new MongoDbSpringDataUtil(applicationContext, mongoDbFactory, mongoConverter);

    }

    /**
     * The VanillaBP Camunda 8 adapter stores information about BPMN files deployed.
     * As there are also timestamps stored custom MongoDB converters need to be registers.
     * This is done by this bean.
     * <p>
     * Currently, this BPMN deployment information is not provided by the Camunda API.
     * Beginning with Camunda 8.8 this will change. VanillaBP Camunda 8 adapter will use
     * this new API once available.
     *
     * @return The MonogoDB conversions
     */
    @Bean
    public MongoCustomConversions mongoCustomConversions() {

        return new MongoCustomConversions(
                List.of(
                        new OffsetDateTimeWriteConverter(),
                        new OffsetDateTimeReadConverter()));

    }

}
