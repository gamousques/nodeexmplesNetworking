'use strict';
const assert = require('assert');
const EventEmitter = require('events').EventEmitter;
const LDJClient = require('../lib/ldj-client.js');


describe('LDJClient', () => {
    let stream = null;
    let client = null;

    beforeEach(() => {

    });


    it('should check stream contructor as null', done => {
        assert.throws(()=>{new LDJClient(stream)}, Error, 'stream could not be null');
        done();
    });


});