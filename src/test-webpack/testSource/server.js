var http = require("http");
var express = require('express');
var webpack = require("webpack");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../../../webpack.config');
var hmr = require("webpack-dev-hmr");
var webpackCompiler = webpack(webpackConfig);
var path = require('path');

var app = express();
app.set('port', 8080);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../testApp/index.html'));
});
app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath, 
    hot: true,
    stats: {
        colors: true
    }
}));

var server =  http.createServer(app);
server.on('listening', function(){
    console.log("Server is listening on port ", app.get('port'));
    hmr.listen(server, webpackCompiler);
}).on('close', function(){
    console.log('Closing server');
    hmr.close();
});

server.listen(app.get('port'), function(err){
  if (err) {
    logger.error(err);
    throw err;
  }
});

//var db = require("./db");
//var locationModel = db.locationModel;
//
//var location = new locationModel({position : "0.0 0.0", grade:3});
//
//db.save(location);
//