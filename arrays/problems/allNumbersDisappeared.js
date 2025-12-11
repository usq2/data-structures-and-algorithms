// given an array of integers containing intergers from 1 to n
// also array is of size n
// find the missing numbers in it

/*
*
* This algorithm pattern is commonly called the Index Negation Technique or Array Index Marking.
* The technique uses the array elements as indices to mark which 
* values have been "seen" by negating the value at the corresponding index position. 
* The absolute value of each number determines which index to mark, and flipping that 
* index's value to negative serves as a flag that the number exists in the array.
* IMP : Only works for ranges 
* This pattern is frequently used to solve problems like:
* 1. Finding missing numbers in an array where elements are in range 1 to n
* 2. Finding duplicate numbers
* 3. Detecting which numbers appear in an array without using extra space
*
* i/p = [4, 3, 2, 7, 8, 2, 3, 1]
* mark idx as negative for visited
* something once marked as negative will not be flipped
*
* step 1 -> mark -> [4, 3, 2, -7, 8, 2, 3, 1]
                    [4, 3, -2, -7, 8, 2, 3, 1]
                    [4, -3, -2, -7, 8, 2, 3, 1]
                    [4, -3, -2, -7, 8, 2, -3, 1],
                    [4, -3, -2, -7, 8, 2, -3, -1],
                    [4, -3, -2, -7, 8, 2, -3, -1],
                    [4, -3, -2, -7, 8, 2, -3, -1],
                    [-4, -3, -2, -7, 8, 2, -3, -1],
  step 2 -> print all positive index
    [5,6]
*/
function findDisappearedNumbers(arr) {
  arr.forEach((num) => {
    //marking phase
    let idx = num <= 0 ? num * -1 : num;
    if (arr[idx - 1] > 0) {
      arr[idx - 1] = arr[idx - 1] * -1;
    }
  });
  let res = [];
  //printing
  arr.forEach((num, index) => {
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
