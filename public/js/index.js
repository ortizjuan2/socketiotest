var socket = io();

// connect event
socket.on('connect', function (){
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'jom@riderled.com',
        text: 'Hey whats going on.'
    });

});

socket.on('disconnect', function (){
    console.log('Disconnected from sever');
});


socket.on('newEmail', function (data){
    console.log('New Email!', data);

});

socket.emit('createEmail', {
    to: 'jom@riderled.com',
    text: 'Hey whats going on.'
});