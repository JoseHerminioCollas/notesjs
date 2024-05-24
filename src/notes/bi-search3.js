let arr = [1, 2, 4, 7, 55, 77, 88, 444, 555, 777]
console.log('aaa', arr)
function bso(searchElement) {
    'use strict'; 
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    var currentIndex;
    var currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = arr[currentIndex];
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1;
}

function bs (a, n) {
    let l = 0
    let r = a.length - 1
    let c
    while (l <= r) {
        c = Math.floor((r + l) / 2)        
        console.log(c)
        if (a[c] > n) {
            r = c - 1
        } else if (a[c] < n) {
            l = c + 1
        } else {
            return c
        }
    }
    return -1
}

////console.log('xx', bso( 188))
console.log('xxxx', bs(arr, 7))

function Note () { return 1 }
module.exports = Note
