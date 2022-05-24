const _ = require("lodash");
const EventEmitter = require("events");

function MyEventEmitter() {
    this.events = {};
}

MyEventEmitter.prototype.on = function(eventName, eventHandler) {
    if(!_.isFunction(eventHandler)) throw new Error(`Invalid ${eventHandler}. It should be type of function instead provided with ${typeof eventHandler}`);

    if(!this.events[eventName]) {
        this.events[eventName] = []
    }

    this.events[eventName].push(eventHandler)
}

MyEventEmitter.prototype.emit = function(eventName) {
    if(!this.events[eventName]) return new Error('Invalid event name');
    this.events[eventName].forEach(eventHandler => eventHandler());
}

const e1 = new MyEventEmitter();
const e2 = new EventEmitter();

// class CustomEventEmitter extends EventEmitter {

// }

module.exports = e2;