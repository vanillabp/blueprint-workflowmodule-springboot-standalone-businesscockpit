
## TaskEntity and TaskFormData Patterns

### Why This Pattern?

When a user interacts with a task, they may save intermediate progress before completing it. Instead of persisting this
data directly within the aggregate, we use a `LoanApprovalTaskEntity` that acts as a mapping for user task data. This
approach provides several advantages:

1. **Separation of Concerns** – The aggregate represents the overall state of the workflow, while individual user task
   data is handled separately.
2. **Intermediate Saves** – Users can save task data without committing it to the aggregate, allowing flexibility in the
   approval process.
3. **Data Consistency** – The aggregate remains clean and only gets updated with finalized decisions when a task is
   completed.
4. **Auditability** – Keeping task data in separate entities allows tracking changes, timestamps, and user inputs before
   finalizing the workflow.

### How It Works

1. When a user task is started, we create `LoanApprovalTaskEntity` corresponding to the task ID. This entity includes:
    - Task metadata (e.g., creation timestamp)
    - A `LoanApprovalTaskFormDataImpl` object that stores the user’s input in JSON format. (In this case it is only the `riskAcceptable` Boolean)
2. The aggregate maintains a **mapping** to the `LoanApprovalTaskEntity`, rather than storing the data itself.
3. When the task is **completed**, relevant data from `LoanApprovalTaskFormDataImpl` is transferred to the aggregate,
   the task completion timestamp is set, and the workflow proceeds.

### Example Flow

1. **User saves task** → Data is stored in `FORM_DATA` of the `LoanApprovalTaskEntity` table. (not in the aggregate).
2. **User resumes task** → Data is retrieved from `FORM_DATA` of the `LoanApprovalTaskEntity` table.
3. **User completes task** →
    - `riskAcceptable` from `LoanApprovalTaskFormDataImpl` is saved into the aggregate.
    - The task’s `completedAt` timestamp is updated.
    - The user task is marked as completed in the workflow.

This approach ensures a structured, maintainable workflow while keeping the aggregate focused on finalized business
decisions. 🚀

