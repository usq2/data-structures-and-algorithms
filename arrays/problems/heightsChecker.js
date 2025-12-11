/**
 * 
 * A school is trying to take an annual photo of all the students. 
 * The students are asked to stand in a single file line in non-decreasing order by height. 
 * Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
 * You are given an integer array heights representing the current order that the students are standing in. 
 * Each heights[i] is the height of the ith student in line (0-indexed).
 * Return the number of indices where heights[i] != expected[i].
 *  
 */
function heightChecker(heights) {
  let sortHeights = heights.map((e) => {
    return e;
  });
  // sort ascending
  sortHeights.sort((a, b) => a - b);
  let z = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortHeights[i]) z++;
  }
  return z;
}
function main() {
  let arr = [
    [2, 0, 2],
    [3, 2, 1, 0],
    [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7],
    [1, 2, 3, 4]
  ];

  arr.forEach((elem) => {
    console.log(heightChecker(elem));
  });
}
main();
