const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('ouvi você:', message)
})
ev.emit('saySomething', 'Juan')