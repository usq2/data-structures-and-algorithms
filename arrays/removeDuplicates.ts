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
