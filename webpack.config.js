const webpack =  require('webpack');
const path = require('path');

const PATHS = {
    testSource: path.join(__dirname, "src/test-webpack/testSource"), 
    testApp: path.join(__dirname, "src/test-webpack/testApp")
};

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/', 
        'webpack/hot/only-dev-server',
        PATHS.testSource
    ],
    output: {
        path: PATHS.testApp, 
        filename: "bundle.js"
    }, 
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["react-hot", "babel"], 
                include: PATHS.testSource, 
                exclude: /node_modules/
            }
        ]
    }
};


/*

// AVEC MERGE

const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

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
*/