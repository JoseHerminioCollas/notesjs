var swap = function (array, pos1, pos2) {
    var temp = array[pos1]
    array[pos1] = array[pos2]
    array[pos2] = temp
}

var heapsPermute = function (array, output, n) {
    n = n || array.length // set n default to array.length
    if (n === 1) {
        output(array)
    } else {
        for (var i = 1; i <= n; i += 1) {
            heapsPermute(array, output, n - 1)
            if (n % 2) {
                var j = 1
            } else {
                // var j = i
                j = i
            }
            swap(array, j - 1, n - 1) // -1 to account for javascript zero-indexing
        }
    }
}

// For testing:
var print = function (input) {
    console.log(input)
}

heapsPermute(['a', 'b', 'c', 'd'], print)

/*
generate (n, arr)
if n = 1
    output arr
else
for i = 0; i < n; i += 1
    generate (n - 1, arr)

if n is even
swap(arr[i], arr[n - 1])
else
swap(arr[0], arr[n - 1])

 // Purpose is to create every permutation from the elements in the array
 // We can do this by using Heap's algorithm
 var start = [1, 2, 3];

 // Get the permutations
 generate(start.length, start);

 // Generate the permutation for a given n (amount of elements) and a given array
 function generate(n, arr) {
 // If only 1 element, just output the array
 if (n == 1) {
 console.log(arr);
 return;
 }

 for (var i = 0; i < n; i+= 1) {
 generate(n - 1, arr);

 // If n is even
 if (n % 2 == 0) {
 swap(arr, i, n - 1);
 } else {
 swap(arr, 0, n - 1);
 }
 }
 }

 function swap(arr, idxA, idxB) {
 var tmp = arr[idxA];
 arr[idxA] = arr[idxB];
 arr[idxB] = tmp;
 }

 http://www.quickperm.org/quickperm.html
    */
