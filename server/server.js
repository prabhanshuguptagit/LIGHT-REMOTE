//server.js
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket){
  console.log('Connection');

  socket.on('CH01', function (from, msg) {
  	console.log(msg);
    io.emit('CH02', 'Controller', msg); 
 	});

});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir)); 												

http.listen(3000, "0.0.0.0", function () {
  console.log('listening on *:3000');
});
