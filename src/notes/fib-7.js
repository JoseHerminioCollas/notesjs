function fib(n) {
    let fN = [0, 1]
    for (let i = 2; i < n; i++) {
	console.log(i)
        fN.push(fN[i - 1] + fN[i - 2])
    }
    return fN[n-1]
}
