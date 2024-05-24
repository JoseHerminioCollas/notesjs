// bubble sort
const arr = [1, 3, 32, 5, 654, 33, 2, 1, 4545, 4];

const x = () => {
    let hasChange = true;
    while (hasChange) {
        hasChange = false;
        for (let i = 0; i <= arr.length; i += 1) {
            const j = i + 1;
            if (arr[i] > arr[j]) { // if true then swap
                hasChange = true;
                const t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    if (!hasChange) return arr;
    return arr;
};

module.exports = [() => x(), 'debug'];
