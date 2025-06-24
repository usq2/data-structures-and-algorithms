/*
Given an array arr of integers, check if there exist two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]
*/
function checkIfExist(arr: number[]): boolean {
  let am = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (am.has(arr[i] * 2) || am.has(arr[i] / 2)) {
      return true;
    }
    am.add(arr[i]);
  }
  return false;
}
function main() {
  let arr = [0, -2, 2];
  checkIfExist(arr);
}
main();
