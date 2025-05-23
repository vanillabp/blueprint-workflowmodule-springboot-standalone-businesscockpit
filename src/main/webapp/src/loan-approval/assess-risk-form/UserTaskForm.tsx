import { UserTaskForm as UserTaskFormComponent } from "@vanillabp/bc-shared";
import { useEffect, useState } from "react";
import { buildTimestamp, buildVersion } from "../../WorkflowPage";

const AssessRiskForm: UserTaskFormComponent = ({ userTask }) => {
  const [permitted, setPermitted] = useState<boolean | undefined>(undefined);
  const [amount, setAmount] = useState(null);
  const [riskAcceptable, setRiskAcceptable] = useState(null);
  const [completedBy, setCompletedBy] = useState(null);
  const baseUrl = `${userTask.workflowModuleUri}/api/loan-approval`;
  const loanRequestId = userTask.businessId;

  const handleRiskOptionChange = (event) => {
    setRiskAcceptable(event.target.value === "accept");
  };

  // Fetch existing data on mount
  useEffect(() => {
    const fetchExistingData = async () => {
      if (!loanRequestId) return;

      try {
        const response = await fetch(
          `${baseUrl}/${loanRequestId}/forms/${userTask.id}/assess-risk`
        );
        if (!response.ok) {
          if (response.status === 403 || response.status === 401) {
            setPermitted(false);
          }
          console.error("Failed to fetch loan approval data");
          return;
        }
        setPermitted(true);
        const data = await response.json();
        console.log("Fetched data:", data);

        // Set state with existing values
        if (data.amount !== undefined) setAmount(data.amount);
        if (data.riskAcceptable !== undefined)
          setRiskAcceptable(data.riskAcceptable);
        if (data.completedBy !== undefined) setCompletedBy(data.completedBy);
      } catch (error) {
        console.error("Error fetching loan approval data:", error);
      }
    };

    fetchExistingData();
  }, [
    baseUrl,
    loanRequestId,
    userTask,
    setPermitted,
    setAmount,
    setRiskAcceptable,
    setCompletedBy,
  ]);

  const handleCompleteTask = async () => {
    const loanRequestId = userTask.businessId;
    const taskId = userTask.id;

    if (!loanRequestId || !taskId) {
      console.error("Missing workflow ID or task ID");
      return;
    }

    if (riskAcceptable === null) {
      console.error("Please select a risk assessment option");
      return;
    }

    const url = `${baseUrl}/${loanRequestId}/forms/${taskId}/assess-risk`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          riskIsAcceptable: riskAcceptable,
        }),
      });

      if (!response.ok) {
        console.error("Failed to complete task:", response.status);
      } else {
        console.log("Task completed successfully");
        window.close();
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleSaveTask = async () => {
    const loanRequestId = userTask.businessId;
    const taskId = userTask.id;
    if (!loanRequestId) {
      console.error("Missing workflow ID");
      return;
    }

    await fetch(`${baseUrl}/${loanRequestId}/forms/${taskId}/assess-risk`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        riskIsAcceptable: riskAcceptable,
      }),
    });
  };

  return permitted === false ? (
    <div>Not permitted to see user task</div>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "15px",
        gap: "15px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h1>Assess Risk</h1>
      <div>
        <label style={{ fontWeight: "bold" }}>Amount: </label>
        <span>{amount !== null ? amount : "Loading..."}</span>
      </div>
      <div style={{ fontSize: "12px" }}>
        User task details provided in&nbsp;
        <span
          style={{
            fontFamily: "monospace",
            border: "1px solid #ddd",
            borderRadius: "3px",
          }}
        >
          Service#assessRiskDetails(PrefilledUserTaskDetails, Aggregate)
        </span>
        &nbsp;are handed over by the business cockpit application (e.g.
        "loanRequestId"). Since those details are meant to be shown in the list
        of user tasks one should not pass all data available to the business
        cockpit. Instead data needed in this view but not in the list of user
        tasks has to be loaded from the workflow module as shown by this
        component.
      </div>
      <div>
        <label style={{ fontWeight: "bold" }}>Risk Assessment:</label>
        <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
          <label>
            <input
              disabled={userTask.endedAt != null}
              type="radio"
              name="riskAssessment"
              value="accept"
              checked={riskAcceptable === true}
              onChange={handleRiskOptionChange}
            />{" "}
            Accept
          </label>
          <label>
            <input
              disabled={userTask.endedAt != null}
              type="radio"
              name="riskAssessment"
              value="deny"
              checked={riskAcceptable === false}
              onChange={handleRiskOptionChange}
            />{" "}
            Deny
          </label>
        </div>
      </div>
      {userTask.endedAt != null ? (
        <p>
          This Task has already been completed by {completedBy} at{" "}
          {userTask.endedAt.toTimeString()}
        </p>
      ) : undefined}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleCompleteTask}
          disabled={riskAcceptable === null || userTask.endedAt != null}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Complete Task
        </button>
        <button
          onClick={handleSaveTask}
          disabled={userTask.endedAt != null}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Save Task
        </button>
      </div>
      <div style={{ fontSize: "12px" }}>
        Version: {`${buildVersion} from ${buildTimestamp.toLocaleString()}`}
      </div>
    </div>
  );
};

export default AssessRiskForm;
