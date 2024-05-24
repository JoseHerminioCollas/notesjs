
function rev(root) {
    let a = root
    let b
    while(a) {
	console.log('a', a)
	const t = a.n
	a.n = b
	console.log('b', a)
	b = a
	console.log('c', a, b)
	a = t
	console.log('d', a, b)
    }
    return b
}
