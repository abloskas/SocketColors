const express = require('express');
const app = express();
app.use(express.static(__dirname + "/views"));
const server = app.listen(5000);
const io = require('socket.io')(server);
var count = 0;
var color = "white"  
io.on('connection', function (socket) { 
  socket.emit('clr', {color: color});
  socket.on('btn_click', function(data){
    color = data.color;
    io.emit('clr', {color: color});
  });

});
