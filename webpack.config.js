const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const webpack = require("webpack");
const dotenv = require("dotenv");

// update process.env
dotenv.config();

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hbler",
    projectName: "api",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@hbler/api"],
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
    // modify the webpack config however you'd like to by adding to this object
  });
};
