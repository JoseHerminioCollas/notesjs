// is rotation //
function isRot () {
    const s1 = 'abc'
    const s2 = 'cab'
    const s3 = `${s1}${s1}`
    const isS = s3.includes(s2)
    return isS
}

function Note () {
    const rV = isRot()
    console.log(' ::', rV)
}

export default Note
