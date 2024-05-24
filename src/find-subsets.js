function getCombinations(array) {
    const result = [];
    function fork(i, t) {
        if (i === array.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }
    fork(0, []);
    return result;
}
	
console.log(getCombinations([1, 2, 3]));
