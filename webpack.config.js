const { merge } = require("webpack-merge");
const common = require('./config/webpack/webpack.common');

module.exports = (env) => {
  const MODE = env.mode || 'development';
  const PORT = env.port || 3000;

  return merge(common, {
    mode: MODE,
    devtool: 'inline-source-map',
    devServer: {
      port: PORT,
      open: true,
      historyApiFallback: true,
      hot: true,
    },
    stats: {
      errorDetails: true,
    },
  })
}
