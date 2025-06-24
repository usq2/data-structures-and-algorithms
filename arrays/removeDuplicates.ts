/**
 * 
 * Given a sorted array arr. Return the size of the modified array which contains only distinct elements.
Note:
1. Don't use set or HashMap to solve the problem.
2. You must return the modified array size only where distinct elements are present and modify the original array such that all the distinct elements come at the beginning of the original array.
 */
function removeDuplicates(nums: number[]): number {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== nums[i]) {
      j++;
      nums[j] = nums[i + 1];
    }
  }
  return j;
}
