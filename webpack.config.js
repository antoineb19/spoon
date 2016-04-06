const webpack =  require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const PATHS = {
    testSource: path.join(__dirname, "src/test-webpack/testSource"), 
    testApp: path.join(__dirname, "src/test-webpack/testApp")
};

const common = {
  entry: {
    testApp: PATHS.testSource
  },
  output: {
    path: PATHS.testApp,
    filename: 'bundle.js'
  }, 
    resolve: {
        extensions : ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["babel"],
                include: PATHS.testSource
            }
        ]
    }
};


if(TARGET === 'start' || !TARGET) {

  module.exports = merge(common, {});
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.testApp,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });

}
