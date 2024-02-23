const { merge } = require("webpack-merge");
const path = require("path")
const { buildWebpack } = require('./config/webpack/build.webpack');

module.exports = (env) => {
  const MODE = env.mode || 'development';
  const PORT = env.port || 3000;

  return buildWebpack({
    mode: MODE,
    port: PORT,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
  })
}
