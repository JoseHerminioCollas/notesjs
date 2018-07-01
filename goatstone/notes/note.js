let debug = 11;

const arr = [3, 45, 1, 34, 45, 5];
debug = arr;
const x = () => {
    for (let i = 0; i < 3; i += 1) {
        arr.push(i);
    }
    return arr;
};

const note = () => x();


module.exports = [note, debug];
