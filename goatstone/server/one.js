/* js/server/one.js Jose Collas 7.2015   */
var express = require('express')
var app = express()
var fileRoot = ''
var hostName = ''
var baseName = '/home/goat/projects/notesjs/'
app.get('/', function (req, res) {
    res.sendFile(fileRoot + baseName + 'goatstone/server/index.html')
})
app.use(express.static('node_modules'))
app.use('/dist/', express.static(baseName + 'dist'))

var server = app.listen(5000, hostName, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})
