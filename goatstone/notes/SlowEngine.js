/* slowSort.js
 * Slow down the double loop
 * */

function SlowEngine () {
    this.id = 'SlowEngine'
    this.callBack = null
    this.delay = 300
}
SlowEngine.prototype.start = function (arr) {
    this.mainIterate(arr, 0, 0)
}
SlowEngine.prototype.setCallback = function (callBack) {
    this.callBack = callBack
}
SlowEngine.prototype.mainIterate = function (arr, i, j) {
    if (i < arr.length) {
        this.innerEngine(arr, i, j)
    }
}
SlowEngine.prototype.innerEngine = function (arr, i, j) {
    var $this = this

    if (this.callBack) {
        this.callBack(arr, i, j)
    }

    setTimeout(function () {
        if (j <= arr.length) {
            $this.innerEngine(arr, i, ++j)
        } else {
            $this.mainIterate(arr, ++i, i)
        }
    }, this.delay)
}
