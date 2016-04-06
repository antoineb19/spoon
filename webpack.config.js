const webpack =  require('webpack');
const path = require('path');

const PATHS = {
    testSource: path.join(__dirname, "src/test-webpack/testSource"), 
    testApp: path.join(__dirname, "src/test-webpack/testApp")
};

module.exports = {
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
