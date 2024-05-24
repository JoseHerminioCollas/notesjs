/* goatstone.time.Timer */
var EventEmitter = require('events').EventEmitter

function Timer (settings = {}) {
    EventEmitter.call(this)
    var defaultSettings = { tickIncrement: 1000 }
    this.settings = Object.assign(defaultSettings, settings)
    this.isRunning = false
    this.control = {
        start: () => {
            this.start()
        },
        stop: () => {
            this.stop()
        },
        on: (a, b) => {
            this.on(a, b)
        }
    }
}
Timer.prototype.start = function () {
    if (this.isRunning) return
    this.isRunning = true
    this.interval = setInterval(
      () => {
          this.emit('tick', this.control)
      }, this.settings.tickIncrement)
    return this.control
}
Timer.prototype.stop = function () {
    clearInterval(this.interval)
    return this.control
}.bind(this)

module.exports = Timer
