// module.exports = {
//   transpileDependencies: true,
//   devServer: {
//     historyApiFallback: true,
//     allowedHosts: "all",
//     client: {
//       webSocketURL: {
//         port: process.env.GITPOD_WORKSPACE_ID ? 443 : undefined,
//       },
//     },
// }}

module.exports = {
  // options...
  devServer: {
    // disableHostCheck: true
  },
  publicPath: process.env.NODE_ENV === "production" ? "/project3-foodietrip/" : "/"
};




