/**
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/

const arraySum = (pArr) => {
  let sum = 0;
  pArr.forEach((item) => {
    sum += item;
  });
  return sum;
};

const maxArrSum = (pArr) => {
  let sum = 0;
  pArr.forEach((arr) => {
    const currSum = arraySum(arr);
    if (sum < currSum) {
      sum = currSum;
    }
  });
  return sum;
};
const main = () => {
  const input = [
    [1, 2, 3],
    [2, 4, 6],
  ];
  if (maxArrSum(15)) {
    console.log("Success");
  } else {
    console.log("failure");
  }
};
