module.exports = () => {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
      use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const scssLoaders = {
    test: /\.s[ac]ss|css$/i,
      use: ['style-loader', 'css-loader', 'scss-loader'],
  };

  return [scssLoaders, fileLoader, tsLoader, svgLoader];
}
