const a = [ 11, 4, 13, 23, 25, 27, 3, 2323, 14, 22, 1]
function divMerge(items){
    if (items.length < 2) {
        return items
    }
    const middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle)

    return merge( divMerge(left), divMerge(right) )
}
console.log('aaa')
divMerge( a )
function merge( left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length &&  ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    result =  result.concat(left.slice(il)).concat(right.slice(ir));
    console.log( ` - - - -  ${ left }  :  ${ right }` )
    console.log( `zz   :  ${ result }` )

    return result
}

