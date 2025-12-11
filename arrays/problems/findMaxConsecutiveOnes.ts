/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 */

function findMaxConsecutiveOnes(nums: number[]): number {
  let max_count = 0;
  let consecutive_count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) consecutive_count++;

    if (consecutive_count > max_count) {
      max_count = consecutive_count;
    }
    if (nums[i] !== 1) {
      consecutive_count = 0;
    }
  }
  return max_count;
}
