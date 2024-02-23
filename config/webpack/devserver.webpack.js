function devServerWebpack(port){
  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}

module.exports = { devServerWebpack }
