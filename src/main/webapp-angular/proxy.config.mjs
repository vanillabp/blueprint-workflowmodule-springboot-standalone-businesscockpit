export default [
  {
    context: [
      "/user",
      "/dev-shell",
      "/gui/api",
      "/official-api",
    ],
    target: 'http://0.0.0.0:8079',
    changeOrigin: true,
    secure: false,
    loglevel: "debug",
  },
  {
    context: [
      "/wm/loan-approval"
    ],
    target: 'http://0.0.0.0:9080',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      "^/wm/loan-approval": ""
    }
  }
];
