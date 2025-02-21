import { UserTaskForm as UserTaskFormComponent } from "@vanillabp/bc-shared";
import { useState } from "react";

const UserTaskForm: UserTaskFormComponent = ({ userTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCompleteTask = async () => {
        const id = userTask.businessId;
        const taskId = userTask.id;

        if (!id || !taskId) {
            console.error("Missing workflow ID or task ID");
            return;
        }

        await fetch(`/usecase/${id}/start-usertask/${taskId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userInput: inputValue })
        });
    };

    const handleSaveTask = async () => {
        const id = userTask.businessId;
        if (!id) {
            console.error("Missing workflow ID");
            return;
        }

        await fetch(`/usecase/${id}/save-task`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userInput: inputValue })
        });
    };

    const handleCancelTask = async () => {
        const id = userTask.businessId || userTask.workflowId;
        if (!id) {
            console.error("Missing workflow ID");
            return;
        }

        await fetch(`/usecase/${id}/cancel-task`, {
            method: "DELETE" });
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
