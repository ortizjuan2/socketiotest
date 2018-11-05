const http = require('http');
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

// create new express app
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// create middleware to serve static data
app.use(express.static(publicPath));

// start event listener for connections
io.on('connection', (socket)=>{
    console.log('New user connected');

    socket.on('disconnect', ()=>{
        console.log('User was disconnected')
    });

    // emit event from server to client and pass some data
    socket.emit('newEmail',{
        from: 'mike@gmail.com',
        text: 'Hey. What is going on.'
    });

    // event listener to crate new email from client
    socket.on('createEmail', (newEmail)=>{
        console.log('Create Email: ', newEmail);
    });

});




server.listen(port, ()=>{
    console.log(`App is up on port ${port}`);
});