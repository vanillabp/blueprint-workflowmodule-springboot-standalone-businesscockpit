import { UserTaskForm as UserTaskFormComponent } from "@vanillabp/bc-shared";
import { useState } from "react";

const UserTaskForm: UserTaskFormComponent = ({ userTask }) => {
    const [inputValue, setInputValue] = useState("");
    const baseUrl = "http://localhost:9080";

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCompleteTask = async () => {
        const usecaseId = userTask.businessId;
        const taskId = userTask.id;

        if (!usecaseId || !taskId) {
            console.error("Missing workflow ID or task ID");
            return;
        }

        await fetch(`${baseUrl}/usecase/${usecaseId}/start-usertask/${taskId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa("abc:123")
            },
            body: JSON.stringify({ userInput: inputValue })
        });
    };

    const handleSaveTask = async () => {
        const usecaseId = userTask.businessId;
        const taskId = userTask.id;
        if (!usecaseId) {
            console.error("Missing workflow ID");
            return;
        }

        await fetch(`${baseUrl}/usecase/${usecaseId}/save-task/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa("abc:123")
            },
            body: JSON.stringify({ userInput: inputValue })
        });
    };

    const handleCancelTask = async () => {
        const id = userTask.businessId || userTask.workflowId;
        const taskId = userTask.id;

        if (!id) {
            console.error("Missing workflow ID");
            return;
        }

        await fetch(`${baseUrl}/usecase/${id}/cancel-task/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa("abc:123")
            }
        });
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
            />
            <button onClick={handleCompleteTask}>Complete Task</button>
            <button onClick={handleSaveTask}>Save Task</button>
            <button onClick={handleCancelTask}>Cancel Task</button>
        </div>
    );
};

export default UserTaskForm;
