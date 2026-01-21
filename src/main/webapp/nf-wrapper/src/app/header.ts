const componentName = 'loan-approval-header';

(async () => {
  await import(
      /* webpackIgnore: true */
      // @ts-ignore
      '../../../library/dist/header.ce.js'
      )
})()

export {componentName};
