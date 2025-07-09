function findDisappearedNumbers(nums) {
  nums.forEach((num) => {
    let ind = num <= 0 ? num * -1 : num;
    if (nums[ind - 1] > 0) {
      nums[ind - 1] = nums[ind - 1] * -1;
    }
  });
  let res = [];
  nums.forEach((num, index) => {
    if (num > 0) {
      res.push(index + 1);
    }
  });
  return res;
}
function main() {
  let arr = [
    // [2, 0, 2],
    // [3, 2, 1, 0],
    [4, 3, 2, 7, 8, 2, 3, 1],
    // [1, 2, 3, 4],
  ];

  arr.forEach((elem) => {
    console.log(findDisappearedNumbers(elem));
  });
}
main();
