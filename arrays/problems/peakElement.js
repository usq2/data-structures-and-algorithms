/**
 *  Given an array arr[] where no two adjacent elements are same,
 *  find the index of a peak element.
 * An element is considered to be a peak
 * if it is greater than its adjacent elements (if they exist).
 *  If there are multiple peak elements,
 * return index of any one of them.
 * The output will be "true"
 * if the index returned by your function is correct;
 *  otherwise, it will be "false".
 */

const peakElement = (arr) => {
  let low = 0;
  let n = arr.length - 1;
  let high = n;
  let mid = Math.floor(low + (high - low) / 2);

  while (low <= high) {
    if (low === 0 || high === n) {
      if (arr[low] > arr[low + 1]) {
        return true;
      }
      if (arr[high] > arr[high - 1]) {
        return true;
      }
    }
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return true;
    } else {
      if (arr[mid] < arr[mid - 1]) high = mid;
      else if (arr[mid + 1] < arr[mid]) low = mid;
    }
  }
  return false;
};
function main() {
  let arr = [
    [2, 0, 2],
    [3, 2, 1, 0],
    [4, 3, 2, 7, 8, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 2, 1, 1],
  ];

  arr.forEach((elem) => {
    console.log(peakElement(elem));
  });
}
main();
