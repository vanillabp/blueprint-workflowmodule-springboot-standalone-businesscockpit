export default (async () => {
    await import('./app/user-task-list')
    await import('./app/user-task-form')
    await import('./app/workflow-list')
    await import('./app/workflow-page')
})();
