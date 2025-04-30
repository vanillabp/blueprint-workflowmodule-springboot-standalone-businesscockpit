export default (async () => {
    await import('./app/task-list')
    await import('./app/task-form')
    await import('./app/workflow-list')
    await import('./app/workflow-form')
})();
