/**
 * Given an sorted array arr[] of integers.
 * Sort the array into a wave-like array(In Place).
 * In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5] ..... and so on.
 * If there are multiple solutions, find the lexicographically smallest one.
 * Note: The given array is sorted in ascending order, and modify the given array in-place without returning a new array.
 *
 */

/**
 * Approach 1: Arr is sorted in ascending order,
 * Use 2 pointer and increment both by 2, initialize at 0 & 1
 * swap the values
 */

function waveArray(arr) {
  let i = 0,
    j = 1,
    n = arr.length;
  for (; i < n; ) {
    if (j < n) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    j += 2;
    i += 2;
  }
  return arr;
}

function main() {
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 7, 10, 20, 30],
  ];
  arr.forEach((elem) => {
    console.log(waveArray(elem));
  });
}

main();
