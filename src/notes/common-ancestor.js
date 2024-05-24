// Find the lowest common ancestor of two nodes
function N (data, parent, left, right) {
    return {d: data, p: parent, l: left, r: right, v: false}
}
let root = N(3, null)
root.l = N(5, root)
root.r = N(1, root)
root.l.l = N(6, root.l)
root.l.r = N(2, root.r)

root.l.r.l = N(7, root.l.r)
root.l.r.r = N(4, root.l.r)

root.r.r = N(8, root.r)
root.r.l = N(0, root.l)
let retVal = cA(root, root.l, root.r.l)
console.log('rv', retVal)
// common ancestor
function cA (tree, node1, node2) {
    console.log('a', arguments)
    while (node1 || node2) {
        if (node1) {
            if (node1.v) return node1.d
            node1.v = true
            node1 = node1.p
        }
        if (node2) {
            if (node2.v) return node2.d
            node2.v = true
            node2 = node2.p
        }
    }
}
printIt()
function printIt () {
    var queue = []
    queue.push([root, 0])
    var img = []
    while (queue.length > 0) {
        var n = queue.shift()
        console.log('===== =', n)
        ;(img[n[1]] || (img[n[1]] = []))
        img[n[1]].push(n[0].d)
        if (n[0].l) {
            let nL = n[1] + 1
            queue.push([n[0].l, nL])
        }
        if (n[0].r) {
            let nL = n[1] + 1
            queue.push([n[0].r, nL])
        }
    }

    console.log('img: ', img)
}
function Note () {
    return 1
}
module.exports = Note
/*
_______6______
/              \
___2__          ___8__
/      \        /      \
0      _4       7       9
  /  \
  3   5
  let root = N(
    6,
    N(2,
      N(0),
      N(4, N(3), N(5))
    ),
    N(8, N(7), N(9))
  )

if (sV === arr[m]) return m
if(sV < arr[m]){
  r = m - 1
} else {
  l = m + 1
}

int rotated_binary_search(int A[], int N, int key) {
  int L = 0;
  int R = N - 1;
  while (L <= R) {
    // Avoid overflow, same as M=(L+R)/2
    int M = L + ((R - L) / 2);
    if (A[M] == key) return M;
    // the bottom half is sorted
    if (A[L] <= A[M]) {
      if (A[L] <= key && key < A[M])
        R = M - 1;
      else
        L = M + 1;
    }
    // the upper half is sorted
    else {
      if (A[M] < key && key <= A[R])
        L = M + 1;
      else
        R = M - 1;
    }
  }
  return -1;
}
const arr = [102, 222, 333, 2, 4, 6, 7, 99]
const a = [2, 4, 6, 7, 99]
const returnV = searchV(102, arr)
console.log('r', returnV)

function searchV (sV, arr) {
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        let m = Math.floor(r-l)
        if (sV === arr[m]) return m
        // is the left side sorted?
        if (arr[l] < arr[m]) {
            if (sV < arr[m] && sV >= arr[l]) {
                r = m - 1
            } else {
                l = m + 1
            }
        } else { // the right part of the array is sorted
            if (sV > arr[m] && sV <= arr[r]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
}
const str = 'racecar'
const retV = findLP(str)
console.log('sxxx', str, retV)
function findLP (s) {
    let pL = s.length // palindromLength
    let sC = 1 // scanCount
    while (pL >= 2) {
        for (let i = 0; i < sC; i++) {
            let a = s.slice(i, i + pL)
            let hL = Math.floor(a.length/2)
            let b = a.slice(0, hL)
            var c = a.slice(-hL).split('').reverse().join('')
            if (b === c) {
              console.log(' - -' )
            }
            console.log('xxxx', i, pL, a, b, c)
        }
        pL--
        sC++
    }
}

*/
