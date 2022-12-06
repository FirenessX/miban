var port = 4004
var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('localhost:4004');
});
var io = require('socket.io')(server);
server.listen(port);
