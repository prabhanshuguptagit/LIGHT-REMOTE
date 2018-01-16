//client.js
var gpio = require("gpio");

var io = require('socket.io-client');
var socket = io('http://localhost:3001/');  //Change this to the server's address ex. http://139.59.18.195:3001.
 
Calling export with a pin number will export that header and return a gpio header instance 
var gpio2 = gpio.export(2, {
   direction: 'out',
   interval: 200,
});

// Add a connect listener
socket.on('connect', function (socket) {
	//turn tubelight on when connected
    gpio2.set();
    console.log('Tubelight connected!');

});

socket.on('CH02', function (from, msg) {  
    console.log('Message : ', from, 'saying', msg);
    //msg contains true or false. USE GPIO and change
    if(msg)
    	gpio2.set();
    else 
    	gpio2.set(0);
});


