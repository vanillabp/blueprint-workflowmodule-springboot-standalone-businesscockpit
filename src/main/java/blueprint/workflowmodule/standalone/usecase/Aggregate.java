package blueprint.workflowmodule.standalone.usecase;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "AGGREGATE")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Aggregate {

    @Id
    public String id;

    @Column
    private boolean wantUserTask;

    @Column
    private String inputValue;
}
