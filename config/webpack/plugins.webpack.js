const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (options) => {
 const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: options.html,
  });

  const copyPlugin =  new CopyPlugin({
    patterns: [
      {
        from: 'public',
        to: '',
        globOptions: {
          ignore: ['**/index.html'],
        },
      },
    ],
  });

  return [htmlWebpackPlugin, copyPlugin]
}
