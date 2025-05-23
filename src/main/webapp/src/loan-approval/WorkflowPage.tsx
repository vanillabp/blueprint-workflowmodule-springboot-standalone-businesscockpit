import { useEffect, useState } from "react";
import { buildTimestamp, buildVersion } from "../WorkflowPage";
import { BcUserTask, WorkflowPage } from "@vanillabp/bc-shared";

const LoanApprovalWorkflowPage: WorkflowPage = ({ workflow }) => {
  const [loaded, setLoaded] = useState(false);
  const [permitted, setPermitted] = useState<boolean | undefined>(undefined);
  const [userTasks, setUserTasks] = useState<Array<BcUserTask> | undefined>(
    undefined
  );
  const [amount, setAmount] = useState(null);
  const [riskAcceptable, setRiskAcceptable] = useState(null);
  const [completedBy, setCompletedBy] = useState(null);
  const baseUrl = `${workflow.workflowModuleUri}/api/loan-approval`;
  const loanRequestId = workflow.businessId;

  useEffect(() => {
    const loadUserTasks = async () => {
      const tasks = await workflow.getUserTasks(true, false);
      setUserTasks(tasks);
    };
    const fetchExistingData = async () => {
      if (!loanRequestId) return;

      try {
        const response = await fetch(`${baseUrl}/${loanRequestId}`);
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
    if (!loaded) {
      setLoaded(true);
      loadUserTasks();
      fetchExistingData();
    }
  }, [setUserTasks, workflow, loaded, setLoaded]);

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
      <h1>{workflow.title.en}</h1>
      <div>
        <label style={{ fontWeight: "bold" }}>Amount: </label>
        <span>{amount !== null ? amount : "Loading..."}</span>
      </div>
      {riskAcceptable == null ? (
        <div>Risk not yet assessed.</div>
      ) : (
        <>
          <div>
            <label style={{ fontWeight: "bold" }}>Completed by: </label>
            <span>{completedBy}</span>
          </div>
          <div>
            <label style={{ fontWeight: "bold" }}>Risk acceptable: </label>
            <span>{riskAcceptable ? "Yes" : "No"}</span>
          </div>
        </>
      )}
      <div style={{ fontSize: "12px" }}>
        Case details provided in&nbsp;
        <span
          style={{
            fontFamily: "monospace",
            border: "1px solid #ddd",
            borderRadius: "3px",
          }}
        >
          Service#workflowDetails(PrefilledWorkflowDetails, Aggregate)
        </span>
        &nbsp;are handed over by the business cockpit application (e.g.
        "loanRequestId"). Since those details are meant to be shown in the list
        of workflows one should pass all data available to the business cockpit.
        Instead data needed in this view but not in the list of workflows has to
        be loaded from the workflow module as shown by this component.
      </div>
      <h2>Tasks:</h2>
      {userTasks === undefined ? (
        <div>Loading user tasks...</div>
      ) : userTasks.length === 0 ? (
        <div>No active user tasks found for this workflow!</div>
      ) : (
        <ol>
          {userTasks.map((userTask) => (
            <li
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => userTask.open()}
            >
              {userTask.title.en}
            </li>
          ))}
        </ol>
      )}
      <div style={{ fontSize: "12px" }}>
        Version: {`${buildVersion} from ${buildTimestamp.toLocaleString()}`}
      </div>
    </div>
  );
};

export default LoanApprovalWorkflowPage;
