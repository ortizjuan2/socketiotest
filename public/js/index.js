var socket = io();

// connect event
socket.on('connect', function (){
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'jom@riderled.com',
    //     text: 'Hey whats going on.'
    // });

});

socket.on('disconnect', function (){
    console.log('Disconnected from sever');
});


socket.on('newMessage', function (data){
    console.log('New message: ', data);

});

// socket.emit('createEmail', {
//     to: 'jom@riderled.com',
//     text: 'Hey whats going on.'
// });

// dissale form deafault behaviour
jQuery('#message-form').on('submit', function (e){
    e.preventDefault();
    $("button").addClass("btn btn-primary");
    $("button").html('Save');
});