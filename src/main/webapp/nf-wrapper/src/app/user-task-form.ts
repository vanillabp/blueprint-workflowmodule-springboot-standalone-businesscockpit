const componentName = 'loan-approval-user-task-form';

(async () => {
  await import(
      /* webpackIgnore: true */
      // @ts-ignore
      '../../../library/dist/user-task-form.ce.js'
      )
})()

export {componentName};