function findMaxConsecutiveOnes(nums: number[]): number {
  let mc = 0;
  let cc = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) cc++;

    if (cc > mc) {
      mc = cc;
    }
    if (nums[i] !== 1) {
      cc = 0;
    }
  }
  return mc;
}
