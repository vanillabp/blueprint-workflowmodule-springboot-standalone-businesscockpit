const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'nf-wrapper',

  exposes: {
    'task-list': './nf-wrapper/src/app/task-list.ts',
    'task-form': './nf-wrapper/src/app/task-form.ts',
    'workflow-list': './nf-wrapper/src/app/workflow-list.ts',
    'workflow-form': './nf-wrapper/src/app/workflow-form.ts',
  },

  shared: {
    'relative-time-format': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
    'relative-time-format/locale/de': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
    'relative-time-format/locale/en': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
    ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
  },

  skip: [
    (pack) => pack.includes('react'),
    '@vanillabp/bc-ui',
    '@workflow-common/ui-styles',
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket'
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
