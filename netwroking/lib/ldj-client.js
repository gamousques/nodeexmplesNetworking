const EventEmitter = require('events').EventEmitter;

class LDJClient extends EventEmitter {
    constructor(stream) {
        super();
        if (stream !== null) {
            let buffer = '';
            stream.on('data', data => {
                buffer += data;
                let boundary = buffer.indexOf('\n');
                while (boundary !== -1) {
                    const input = buffer.substring(0, boundary);
                    buffer = buffer.substring(boundary + 1);
                    this.emit('message', (JSON.parse(input)));
                    boundary = buffer.indexOf('\n');
                }
            });
        } else {
            throw new Error('stream could not be null');
        }
    }


    static connect(stream) {
        return new LDJClient(stream);
    }
}

module.exports = LDJClient;
