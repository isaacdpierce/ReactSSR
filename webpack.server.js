const merge = require('webpack-merge');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that I am building a bundle
  // for NodeJS rather than for the browser
  target: 'node',

  // Tell webpack the root file of the server
  // Entry point - first file webpack looks at
  // when deciding what files to pull for the bundle
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
