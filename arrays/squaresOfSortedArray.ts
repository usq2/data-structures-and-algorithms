// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
function sortedSquares(nums: number[]): number[] {
  let l = 0;
  let r = nums.length - 1;
  let res = new Array(r);
  for (let i = nums.length - 1; i >= 0; i--) {
    const l_sq = nums[l] * nums[l];
    const r_sq = nums[r] * nums[r];
    if (l_sq > r_sq) {
      res[i] = l_sq;
      l++;
    } else {
      res[i] = r_sq;
      r--;
    }
  }
  return res;
}
