/**
 * Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * @param {*} arr 
 * @returns 
 */
function validMountainArray(arr) {
  let n = arr.length;
  if (n < 3) return false;
  let up = true;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
    if (up && arr[i] > arr[i + 1]) {
      if (i === 0) return false;
      up = false;
      continue;
    }
    if (!up && arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return up ? false : true;
}
function main() {
  let arr = [
    [2, 0, 2],
    [3, 2, 1, 0],
    [1, 2, 3, 4, 1],
    [1, 2, 3, 4],
  ];

  arr.forEach((elem) => {
    console.log(validMountainArray(elem));
  });
}
main();
