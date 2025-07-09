/***
 * Given a number x and an array of integers arr, find the smallest subarray with sum greater than the given value. If such a subarray do not exist return 0 in that case.
 */

function smallestSubarray(arr, x) {
  const n = arr.length;
  let j = 0,
    sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum > x) {
      while (j <= i) {
        sum -= arr[j++];
        if (sum <= x) {
          return i - (j - 1) + 1;
        }
      }
    }
  }
  return 0;
}

function main() {
  let arr = [
    // [2, 0, 2],
    [1, 4, 45, 6, 0, 19],
    [4, 3, 2, 7, 8, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 2, 1, 1],
  ];

  arr.forEach((elem) => {
    console.log(smallestSubarray(elem, 19));
  });
}
main();
