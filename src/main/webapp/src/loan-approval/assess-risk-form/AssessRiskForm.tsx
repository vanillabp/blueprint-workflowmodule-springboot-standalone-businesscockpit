import { UserTaskForm as UserTaskFormComponent } from "@vanillabp/bc-shared";
import { useState } from "react";

const AssessRiskForm: UserTaskFormComponent = ({ userTask }) => {
    const [inputValue, setInputValue] = useState("");
    const [riskAcceptable, setRiskAcceptable] = useState(null);
    const springBootName = "standalone-businesscockpit";
    const baseUrl = `/wm/${springBootName}/api/loan-approval`;

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleRiskOptionChange = (event) => {
        setRiskAcceptable(event.target.value === 'accept');
    };

    const handleCompleteTask = async () => {
        const usecaseId = userTask.businessId;
        const taskId = userTask.id;

        if (!usecaseId || !taskId) {
            console.error("Missing workflow ID or task ID");
            return;
        }

        if (riskAcceptable === null) {
            console.error("Please select a risk assessment option");
            return;
        }

        // Create a URL with both request parameters
        const url = `${baseUrl}/${usecaseId}/assess-risk/${taskId}?riskAcceptable=${riskAcceptable}&userInput=${encodeURIComponent(inputValue)}`;

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
            }
        } catch (error) {
            console.error("Error completing task:", error);
        }
    };

    const handleSaveTask = async () => {
        const usecaseId = userTask.businessId;
        const taskId = userTask.id;
        if (!usecaseId) {
            console.error("Missing workflow ID");
            return;
        }

        await fetch(`${baseUrl}/${usecaseId}/save-task/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userInput: inputValue,
                riskIsAcceptable: riskAcceptable
            })
        });
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                />
            </div>

            <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <div>
                    <label>Risk Assessment:</label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="riskAssessment"
                            value="accept"
                            checked={riskAcceptable === true}
                            onChange={handleRiskOptionChange}
                        />
                        Accept Risk
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="riskAssessment"
                            value="deny"
                            checked={riskAcceptable === false}
                            onChange={handleRiskOptionChange}
                        />
                        Deny Risk
                    </label>
                </div>
            </div>

            <button
                onClick={handleCompleteTask}
                disabled={riskAcceptable === null}
            >
                Complete Task
            </button>
            <button onClick={handleSaveTask}>Save Task</button>
        </div>
    );
};

export default AssessRiskForm;
