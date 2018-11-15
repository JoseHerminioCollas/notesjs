const arrA = [10, 80, 30, 90, 40, 50, 70]
function part(arr, l, h) {
    console.log(arr, arguments)
    let i = -1
    let p = arr[h]
    for (let j = 0; j < arr.length; j += 1) {
	console.log(i, j, p)
	if (arr[j] <= p) {
	    i += 1
	    console.log(i)
	    swap(arr, i, j)
	}
    }
    console.log('a', arr);
    swap(arr, i + 1, h)
    console.log('b', arr);
    return i + 1
}
function swap(arr, l, r){
    const t = arr[l]
    arr[l] = arr[r]
    arr[r] = t
}
module.exports = [part, arrA]
/*
 quickSort(arr[], low, high)
{
    if (low < high)
    {
	pi = partition(arr, low, high);

	quickSort(arr, low, pi - 1);  // Before pi
	quickSort(arr, pi + 1, high); // After pi
    }
}
*/
