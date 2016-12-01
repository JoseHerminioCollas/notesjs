function MakeData () {
}
MakeData.prototype.getArray = function (length = 20) {
    const a = Array.from(new Array(length))
    const range = 1000
    a.forEach((e, i, arr) => {
        const rand = Math.floor(Math.random() * range)
        arr[i] = rand
    })

    return a
}

module.exports = MakeData
