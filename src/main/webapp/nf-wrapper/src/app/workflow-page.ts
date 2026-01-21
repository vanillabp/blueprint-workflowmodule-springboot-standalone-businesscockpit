const componentName = 'loan-approval-workflow-page';

(async () => {
  await import(
      /* webpackIgnore: true */
      // @ts-ignore
      '../../../library/dist/workflow-page.ce.js'
      )
})()

export {componentName};