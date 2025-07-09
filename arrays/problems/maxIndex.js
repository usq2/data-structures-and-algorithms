/**
 * Given an array, arr[] of non-negative integers.
 *  The task is to return the maximum of j - i (i<=j)
 *  subjected to the constraint of arr[i] <= arr[j]
 */

function maxIndexDiff(arr) {
  const lmin = [],
    rmax = [],
    n = arr.length;
  let l = 0,
    r = 0;
  lmin[0] = arr[0];
  rmax[n - 1] = arr[n - 1];
  for (let i = 1; i < n; i++) {
    lmin[i] = lmin[i - 1] < arr[i] ? lmin[i - 1] : arr[i];
  }
  for (let j = n - 2; j >= 0; j--) {
    rmax[j] = arr[j] > rmax[j + 1] ? arr[j] : rmax[j + 1];
  }
  let maxdiff = -1;
  while (l < n && r < n) {
    if (lmin[l] <= rmax[r]) {
      if (r - l > maxdiff) maxdiff = r - l;
      r++;
    } else {
      l++;
    }
  }
  return maxdiff;
}

function main() {
  let arr = [[34, 8, 10, 3, 2, 80, 30, 33, 1]];
  arr.forEach((elem) => maxIndexDiff(elem));
}
main();