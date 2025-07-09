/**
 *
 *Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
 */
function replaceElements(arr) {
  let n = arr.length - 1;
  let max = -1;
  for (let i = n; i >= 0; i--) {
    if (arr[i] > max) {
      let t = arr[i];
      arr[i] = max;
      max = t;
      continue;
    }
    arr[i] = max;
  }
  return arr;
}
function main() {
  const testCases = [[17, 18, 5, 4, 6, 1], [400]];
  testCases.forEach((elem) => {
    console.log(replaceElements(elem));
  });
}
main();
