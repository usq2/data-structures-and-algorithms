// Given an array arr[] consisting of only 0s, 1s, and 2s. The objective is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.
/**
 * The idea is to sort the array of size n using three pointers: lo = 0, mid = 0 and hi = n - 1 such that the array is divided into 4 parts -
 * arr[0 .. lo - 1] → All 0s
 * arr[lo .. mid - 1] → All 1s
 * arr[mid .. hi] → Unprocessed elements (unknown)
 * arr[hi + 1 .. n - 1] → All 2s
 */
const dutchFlagProblem = (arr) => {

    let lo = 0, mid=0,hi = arr.length-1

    while (mid <= hi) {
        if (arr[mid] === 0) {
            [arr[lo], arr[mid]]=[arr[mid],arr[lo]];
            lo++;mid++
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[hi]] = [arr[hi],arr[mid]]
            hi--;
        }
    }
    console.log (arr)
}

dutchFlagProblem([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]);