const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
 const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "..", "..",  "public", "index.html"),
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
