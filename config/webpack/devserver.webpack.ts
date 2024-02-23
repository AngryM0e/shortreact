export function devServerWebpack(port: number){
  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}

