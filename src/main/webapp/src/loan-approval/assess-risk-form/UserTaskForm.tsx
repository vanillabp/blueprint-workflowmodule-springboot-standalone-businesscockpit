import { UserTaskForm as UserTaskFormComponent } from "@vanillabp/bc-shared";
import { Box, Text, Button } from "grommet";
import { useEffect, useState } from "react";

const AssessRiskForm: UserTaskFormComponent = ({ userTask }) => {
    const [amount, setAmount] = useState(null);
    const [riskAcceptable, setRiskAcceptable] = useState(null);
    const [completedBy, setCompletedBy] = useState(null);
    const baseUrl = `${userTask.workflowModuleUri}/api/loan-approval`;
    const loanRequestId = userTask.businessId;
    const [isForbidden, setIsForbidden] = useState(false);

    const handleRiskOptionChange = (event) => {
        setRiskAcceptable(event.target.value === 'accept');
    };

    // Fetch existing data on mount
    useEffect(() => {
        const fetchExistingData = async () => {
            if (!loanRequestId) return;

            try {
                const response = await fetch(`${baseUrl}/${loanRequestId}/forms/${userTask.id}/assess-risk`);
                if (response.status === 403){
                    setIsForbidden(true);
                    console.log(response.statusText);
                    return
                } else if (!response.ok) {
                    console.error("Failed to fetch loan approval data");
                    return;
                }
                const data = await response.json();
                console.log("Fetched data:", data);

                // Set state with existing values
                if (data.amount !== undefined) setAmount(data.amount);
                if (data.riskAcceptable !== undefined) setRiskAcceptable(data.riskAcceptable);
                if (data.completedBy !== undefined) setCompletedBy(data.completedBy);
            } catch (error) {
                console.error("Error fetching loan approval data:", error);
            }
        };

        fetchExistingData();
    },[baseUrl, loanRequestId, userTask.id]);

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
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    riskIsAcceptable: riskAcceptable
                })
            });

            if (!response.ok) {
                console.error("Failed to complete task:", response.status);
            } else {
                window.location.reload();
                console.log("Task completed successfully");
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
                riskIsAcceptable: riskAcceptable
            })
        });
    };

    if (isForbidden) {
        return (
            <Box pad="medium">
                <Text color="status-critical" weight="bold">
                    You are not authorized to view this task.
                </Text>
            </Box>
        );
    }

    return (
        <Box
            gap="medium"
            pad="medium"
            border={{ color: 'border', size: 'xsmall' }}
            round="small"
        >
            <Box direction="row" gap="small" align="center">
                <Text weight="bold">Amount:</Text>
                <Text>{amount !== null ? amount : "Loading..."}</Text>
            </Box>

            <Box>
                <Text weight="bold">Risk Assessment:</Text>
                <Box direction="row" gap="medium" margin={{ top: "small" }}>
                    <Box direction="row" align="center" gap="xsmall">
                        <input
                            type="radio"
                            name="riskAssessment"
                            value="accept"
                            disabled={userTask.endedAt != null}
                            checked={riskAcceptable === true}
                            onChange={handleRiskOptionChange}
                        />
                        <Text>Accept</Text>
                    </Box>
                    <Box direction="row" align="center" gap="xsmall">
                        <input
                            type="radio"
                            name="riskAssessment"
                            value="deny"
                            disabled={userTask.endedAt != null}
                            checked={riskAcceptable === false}
                            onChange={handleRiskOptionChange}
                        />
                        <Text>Deny</Text>
                    </Box>
                </Box>
            </Box>

            {userTask.endedAt != null && (
                <Text>
                    This Task has already been completed by {completedBy} at {userTask.endedAt.toTimeString()}
                </Text>
            )}

            <Box direction="row" gap="small">
                <Button
                    label="Complete Task"
                    onClick={handleCompleteTask}
                    disabled={riskAcceptable === null || userTask.endedAt != null}
                    color="light-1"
                    hoverIndicator="light-3"
                    style={{
                        borderRadius: "4px",
                        padding: "8px 16px",
                        border: "1px solid",
                        color: "#333",
                    }}
                />
                <Button
                    label="Save Task"
                    onClick={handleSaveTask}
                    disabled={userTask.endedAt != null}
                    color="light-1"
                    hoverIndicator="light-3"
                    style={{
                        borderRadius: "4px",
                        padding: "8px 16px",
                        border: "1px solid",
                        color: "#333",
                    }}
                />
            </Box>

        </Box>

    );
};

export default AssessRiskForm;
