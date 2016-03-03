/* js/server/one.js Jose Collas 7.2015   */
var express = require('express');
var app = express(); 
var fileRoot = '';
var hostName = ''; 
app.use( express.static('node_modules'));
app.use( '/dist/js/', express.static('dist/js/'));
app.get('/', function (req, res) {
  res.sendFile( fileRoot + '/index.html');
});
var server = app.listen(3000, hostName, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
