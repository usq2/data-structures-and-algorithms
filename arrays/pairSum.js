/***
 * Given an array arr[] of positive integers and another integer target.
 *  Determine if there exist two distinct indices such that the sum of their elements is equal to the target.
 */

/***
 * Possible approaches
 * 1. Brute force take each element and then pair with all other.
 * 2. Two pointer: Sort the array and then take two pointers, start and end,
 *     if a[i] + a[j] > sum decrement j else increment i
 * 3. Use hash maps and check if x-a[i] exists in hash map
 */

function pairSum(arr, x) {
  arr.sort((a, b) => a - b);
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[j];
    if (sum > x) {
      j--;
      continue;
    }
    if (sum < x) continue;
    return true;
  }
  return false;
}

function main() {
  const arr = [[1, 4, 45, 6, 10, 8]];
  arr.forEach((elem) => {
    console.log(pairSum(elem, 16));
  });
}
main();
