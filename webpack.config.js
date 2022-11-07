/* eslint-disable */
const path = require('path');
/* eslint-enable */

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'lib',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.build.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: ['react', '@shopify/polaris'],
};
