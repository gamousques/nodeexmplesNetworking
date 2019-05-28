'use strict';

const server = require('net').createServer(connection => {

    console.log('Suscriber connected');
    // Two message chunks that together make a whole message.
    const firstChunk = '{"type":"changed","timesta';
    const secondChunk = 'mp":1450694370094}\n';

    connection.write(firstChunk);

    //wait to send second chi=unk

    const timer = setTimeout(()=>{
        connection.write(secondChunk);
        connection.end();
    },100);

    //clear timer
    connection.on('end', ()=> {
        clearTimeout(timer);
        console.log('suscriber disconnected');
    });

});

server.listen(6030,function(){
    console.log('Test server listening');
});