/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */
function moveZeroes(nums) {
  let n = nums.length;
  if (n == 1) {
    return;
  }
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue;
    nums[j] = nums[i];
    if (i !== j) nums[i] = 0;
    j++;
  }
}

function main() {
  const testcases = [
    [0, 12],
    [12, 0],
    [0, 0],
  ];
  testcases.forEach((arr) => {
    moveZeroes(arr);
    console.log(arr);
  });
}
main();
