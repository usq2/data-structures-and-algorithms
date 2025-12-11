// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
function sortArrayByParity(a) {
  let o = 0;
  let e = a.length - 1;
  let n = e;
  while (o <= e && n > 0) {
    if (a[o] & 1 && !(a[e] & 1)) {
      let t = a[e];
      a[e] = a[o];
      a[o] = t;
      o++;
      e--;
      n--;
      continue;
    }
    if (!(a[o] & 1)) o++;
    if (a[e] & 1) e--;
    n--;
  }
  return a;
}
function main() {
  const testcases = [
    [3, 1, 2, 4, 0],
    [2, 4, 3, 1],
    [0, 1, 2],
    [1, 0, 3],
    [1, 1, 1, 1, 1],
    [1, 3, 5, 7, 9, 4],
  ];
  testcases.forEach((arr) => {
    sortArrayByParity(arr);
    console.log(arr);
  });
}
main();
