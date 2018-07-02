let debug = 11;

const arr = [22, 3, 45, 1, 34, 45, 5];
debug = arr;
const x = () => {
    for (let i = 0; i < arr.length; i += 1) {
        let minI = i;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[minI] > arr[j]) {
                minI = j;
            }
        }
        const t = arr[i];
        arr[i] = arr[minI];
        arr[minI] = t;
    }
    return arr;
};

const note = () => x();


module.exports = [note, debug];
