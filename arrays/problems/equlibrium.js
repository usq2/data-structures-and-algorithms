/**
 * Given an array of integers arr[], the task is to find the first equilibrium point in the array.
 * The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it.
 * Return -1 if no such point exists.
 */
/**
 *Solution
 * Approach 1: O(n^2) : two loops calculate sums at each step
 * Approach 2: Sum entire array (prefix sum)
 * Loop again: right sum = sum - a[i], left sum = sum
 */
function equlibrium(a) {
  let sum = 0,
    l_sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i];
  for (let j = 0; j < a.length; j++) {
    //right sum
    sum -= a[j];
    l_sum += a[j];
    if (sum === l_sum) return j + 1;
  }
  return -1;
}

function main() {
  const arr = [
    [-7, 1, 5, 2, -4, 3, 0],
    [-5, -1, -1, -1, -1, -1],
    [-8, -9, 0, -17],
    [1, 1, 1, 1],
  ];
  arr.forEach((e) => console.log(equlibrium(e)));
}

main();
