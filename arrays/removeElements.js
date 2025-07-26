/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed.
 * Then return the number of elements in nums which are not equal to val.
 * Consider the number of elements in nums which are not equal to val be k, to get accepted,
 * you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 */

function removeElement(nums, val) {
  let n = nums.length;
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === val) {
      continue;
    }
    if (k !== i) {
      nums[k] = nums[i];
      nums[i] = val;
    }
    k++;
  }
  return k;
}
function main() {
  const testcases = [
    [1, 0, 0, 2, 3, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
  ];
  testcases.forEach((arr) => {
    let k = removeElement(arr, 0);
    console.log(arr, k);
  });
}
main();
