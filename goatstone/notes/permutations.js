function perms(str) {
    const results = []
    if (str.length === 1) {
        results.push(str)
        return results
    }
    for (let i = 0; i < str.length; i += 1) {
        const first = str[i]
        const rest = str.slice(0, i) + str.slice(i + 1)
        const innerPerms = perms(rest)
        for (let j = 0; j < innerPerms.length; j += 1) {
            results.push(first + innerPerms[j])
        }
    }
    return results
}
const r = perms('abc')
console.log('rr', r)