const path = require("path");
const { DefinePlugin } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
// const devPependencies = require('./node_modules/@vanillabp/bc-shared/package.json').devDependencies;
const dependencies =
  require("./node_modules/@vanillabp/bc-shared/package.json").dependencies;
const fs = require("fs");
const parseString = require("xml2js").parseString;
const CopyPlugin = require("copy-webpack-plugin");

// return the version number from `pom.xml` file
function parseVersion() {
  let version = null;
  const pomXml = fs.readFileSync("../../../pom.xml", "utf8");
  parseString(pomXml, (err, result) => {
    if (result.project.version && result.project.version[0]) {
      version = result.project.version[0];
    }
    if (
      version === null &&
      result.project.parent &&
      result.project.parent[0].version &&
      result.project.parent[0].version[0]
    ) {
      version = result.project.parent[0].version[0];
    }
  });
  if (version === null) {
    throw new Error("pom.xml is malformed. No version is defined");
  }
  return version;
}

var basedir = "dist/library-web-components";
var files = fs.readdirSync(path.resolve(__dirname, basedir));

var userTaskForm =
  files.find((name) => name.startsWith("UserTaskForm-")) ||
  files.find((name) =>
    name.startsWith("library-web-components_src_UserTaskForm_"),
  );
var userTaskList =
  files.find((name) => name.startsWith("UserTaskList-")) ||
  files.find((name) =>
    name.startsWith("library-web-components_src_UserTaskList_"),
  );

var workflowForm =
  files.find((name) => name.startsWith("WorkflowForm-")) ||
  files.find((name) =>
    name.startsWith("library-web-components_src_WorkflowForm_"),
  );
var workflowList =
  files.find((name) => name.startsWith("WorkflowList-")) ||
  files.find((name) =>
    name.startsWith("library-web-components_src_WorkflowList_"),
  );

var headerComponent =
  files.find((name) => name.startsWith("HeaderComponent-")) ||
  files.find((name) =>
    name.startsWith("library-web-components_src_HeaderComponent_"),
  );

module.exports = {
  output: {
    path: path.resolve(__dirname, "../../../target/classes/static/dpfi"),
    publicPath: "/wm/dpfi/",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    alias: {
      react: path.join(path.resolve(__dirname, "."), "node_modules", "react"),
      "react-dom": path.join(
        path.resolve(__dirname, "."),
        "node_modules",
        "react-dom",
      ),
    },
  },
  entry: {
    dpfi: path.resolve(__dirname, basedir, "main.js"),
  },
  plugins: [
    new DefinePlugin({
      "process.env.BUILD_TIMESTAMP": `'${new Date().toISOString()}'`,
      "process.env.BUILD_VERSION": `'${parseVersion()}'`,
    }),
    new ModuleFederationPlugin({
      name: "dpfi",
      filename: "remoteEntry.js",
      exposes: {
        UserTaskList: path.resolve(__dirname, basedir, userTaskList),
        UserTaskForm: path.resolve(__dirname, basedir, userTaskForm),
        WorkflowList: path.resolve(__dirname, basedir, workflowList),
        WorkflowPage: path.resolve(__dirname, basedir, workflowForm),
        // TODO: rename: Header
        HeaderComponent: path.resolve(__dirname, basedir, headerComponent),
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
        primeflex: {
          singleton: true,
          requiredVersion: dependencies["primeflex"],
        },
        primeng: {
          singleton: true,
          requiredVersion: dependencies["primeng"],
        },
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "node_modules/ng2-pdfjs-viewer/pdfjs",
          to: path.resolve(
            __dirname,
            "../../../target/classes/static/dpfi/assets/pdfjs",
          ),
        },
      ],
    }),
  ],
};
