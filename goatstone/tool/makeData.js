function MakeData () {
    this.randMax = 900
    this.arrLength = 10
}
MakeData.prototype.getArray = function (length = 20) {
    const a = Array.from(new Array(length))
    const range = 1000
    a.forEach((e, i, arr)=>{
        const rand = Math.floor( Math.random() * range )
        arr[i] = rand
    })

    return a
}
MakeData.prototype.getRandArray = function (length) {
    var l = length || this.arrLength
    return new Array(l).join('x').split('x').map(x => {
        return Math.floor(Math.random() * this.randMax)
    })
}

module.exports = MakeData
