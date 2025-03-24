const { parseVersion } = require('./utils');
const { DefinePlugin } = require("webpack");
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');
const path = require("path");

const aliases = {
  'styled-components': path.join(path.resolve(__dirname, '.'), "node_modules", "styled-components"),
  'react': path.join(path.resolve(__dirname, '.'), "node_modules", "react"),
  'react-dom': path.join(path.resolve(__dirname, '.'), "node_modules", "react-dom"),
  'react-router-dom': path.join(path.resolve(__dirname, '.'), "node_modules", "react-router-dom")
};

module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/wm/loan-approval': {
        target: 'http://0.0.0.0:8080',
        "pathRewrite": {
          "^/wm/loan-approval": ""
        },
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
      },
      '/official-api': {
        target: 'http://localhost:9080',
        secure: false,
        changeOrigin: true,
        logLevel: "debug"
      },
      '/gui/api': {
        target: 'http://0.0.0.0:9080',
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
  webpack: {
    alias: aliases,
    configure: {
      ...(process.env.NODE_ENV !== 'production'
         ? {
             entry: './development/index.tsx',
           }
         : {
             output: {
               publicPath: '/wm/loan-approval/',
             }
           }),
      // this conf come from https://github.com/relative-ci/bundle-stats/tree/master/packages/cli#webpack-configuration
      //stats: {
      //  errorDetails: true,
      //}
    },
    plugins: {
      remove: process.env.NODE_ENV !== 'production'
          ? []
          : [ 'HtmlWebpackPlugin' , 'MiniCssExtractPlugin' ],
      add: [
        new DefinePlugin({
          'process.env.BUILD_TIMESTAMP': `'${new Date().toISOString()}'`,
          'process.env.BUILD_VERSION': `'${parseVersion()}'`,
        }),
        ...(process.env.NODE_ENV !== 'production'
            ? []
            : [
                new ModuleFederationPlugin({
                  name: "general_tasks", // kebab case not supported: use workflow-module-id in snake case
                  filename: 'remoteEntry.js',
                  exposes: {
                    UserTaskList: './src/UserTaskList',
                    UserTaskForm: './src/UserTaskForm',
                    WorkflowPage: './src/WorkflowPage',
                    WorkflowList: './src/WorkflowList',
                  },
                  shared: {
                    react: {
                      singleton: true,
                      requiredVersion: dependencies["react"],
                    },
                    "react-dom": {
                      singleton: true,
                      requiredVersion: dependencies["react-dom"],
                    },
                    "react-router-dom": {
                      singleton: true,
                      requiredVersion: dependencies["react-router-dom"],
                    },
                    grommet: {
                      eager: true,
                      singleton: true,
                      requiredVersion: dependencies["grommet"],
                    },
                    i18next: {
                      eager: true,
                      singleton: true,
                      requiredVersion: dependencies["i18next"],
                    },
                    "react-i18next": {
                      eager: true,
                      singleton: true,
                      requiredVersion: dependencies["react-i18next"],
                    },
                  },
                }),
              ])
      ]
    }
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig, pluginOptions, context: { paths } }) => {
          const moduleScopePlugin = webpackConfig.resolve.plugins.find(plugin => plugin.appSrcs && plugin.allowedFiles);
          if (moduleScopePlugin) {
            Object
                .keys(aliases)
                .map(key => aliases[key])
                .forEach(path => moduleScopePlugin.appSrcs.push(path));
          }
          const ignoreWarnings = [
              { module: /@microsoft\/fetch-event-source/ }
            ];
          return {
              ...webpackConfig,
              ignoreWarnings,
              //stats: 'verbose'
            };
        }
      }
    }
  ]
};
