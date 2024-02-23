const { merge } = require("webpack-merge");
const common = require('./config/webpack/webpack.common');

module.exports = () => {

  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: "3000",
      open: true,
      historyApiFallback: true,
      hot: true,
    },
    stats: {
      errorDetails: true,
    },
  })
}
