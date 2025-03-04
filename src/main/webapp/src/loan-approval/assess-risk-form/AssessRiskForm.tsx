import { UserTaskForm as UserTaskFormComponent } from "@vanillabp/bc-shared";
import {useEffect, useState} from "react";

const AssessRiskForm: UserTaskFormComponent = ({ userTask }) => {
    const [amount,setAmount] = useState(null);
    const [riskAcceptable, setRiskAcceptable] = useState(null);
    const springBootName = "standalone-businesscockpit";
    const baseUrl = `/wm/${springBootName}/api/loan-approval`;
    const loanRequestId = userTask.businessId;


    const handleRiskOptionChange = (event) => {
        setRiskAcceptable(event.target.value === 'accept');
    };

    // Fetch existing data on mount
    useEffect(() => {
        const fetchExistingData = async () => {
            if (!loanRequestId) return;

            try {
                const response = await fetch(`${baseUrl}/${loanRequestId}`);
                if (!response.ok) {
                    console.error("Failed to fetch loan approval data");
                    return;
                }
                const data = await response.json();
                console.log("Fetched data:", data);

                // Set state with existing values
                if (data.amount !== undefined) setAmount(data.amount);
                if (data.riskAcceptable !== undefined) setRiskAcceptable(data.riskAcceptable);
            } catch (error) {
                console.error("Error fetching loan approval data:", error);
            }
        };

        fetchExistingData();
    }, []);

    const handleCompleteTask = async () => {
        const loanRequestId = userTask.businessId;
        const assessRiskTaskId = userTask.id;

        if (!loanRequestId || !assessRiskTaskId) {
            console.error("Missing workflow ID or task ID");
            return;
        }

        if (riskAcceptable === null) {
            console.error("Please select a risk assessment option");
            return;
        }

        // Create a URL with both request parameters
        const url = `${baseUrl}/${loanRequestId}/assess-risk/${assessRiskTaskId}?riskAcceptable=${riskAcceptable}`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                console.error("Failed to complete task:", response.status);
            } else {
                console.log("Task completed successfully");
                // window.location.reload() // TODO add SSE to dev-shell, which causes automatic update of userTask.
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

        await fetch(`${baseUrl}/${loanRequestId}/save-task/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                riskIsAcceptable: riskAcceptable
            })
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <div>
                <label style={{ fontWeight: "bold" }}>Amount: </label>
                <span>{amount !== null ? amount : "Loading..."}</span>
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
                        /> Accept
                    </label>
                    <label>
                        <input
                            disabled={userTask.endedAt != null}
                            type="radio"
                            name="riskAssessment"
                            value="deny"
                            checked={riskAcceptable === false}
                            onChange={handleRiskOptionChange}
                        /> Deny
                    </label>
                </div>
            </div>
            {
                userTask.endedAt != null
                    ? <p>This Task has already been completed at {userTask.endedAt.toTimeString()}</p>
                    : undefined
            }
            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    onClick={handleCompleteTask}
                    disabled={riskAcceptable === null || userTask.endedAt != null} style={{ padding: "10px", cursor: "pointer" }}>Complete Task</button>
                <button
                    onClick={handleSaveTask}
                    disabled={userTask.endedAt != null} style={{ padding: "10px", cursor: "pointer" }}>Save Task</button>
            </div>
        </div>
    );
};

export default AssessRiskForm;
