const webpack = require("webpack");
const pkg = require("./package.json");
const path = require("path");
const { DefinePlugin } = require("webpack");
const fs = require("fs");
const parseString = require("xml2js").parseString;

// return the version number from `pom.xml` file
function parseVersion() {
  console.log("heureka");
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
  console.log("heureka two");
  return version;
}

module.exports = (webpackConfig, options) => ({
  ...webpackConfig,
  plugins: [
    ...webpackConfig.plugins,
    new DefinePlugin({
      "process.env.BUILD_TIMESTAMP": `'${new Date().toISOString()}'`,
      "process.env.BUILD_VERSION": `'${parseVersion()}'`,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                importLoaders: 1,
                ident: "postcss",
                syntax: "postcss-scss",
                plugins: [require("postcss-import"), require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader", // This is the fix
          },
        ],
      },
    ],
  },
});
