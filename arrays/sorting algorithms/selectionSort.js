/**
 *
 * @param {*} a
 *
 * In general, algorithm find the min/max in the rest of the array and then
 * replaces the element at position i with it.
 *
 * Space complexity o(1) -> no extra space or only 1 extra variable
 * Time Complexity in all cases O(n^2)
 */

function selectionSortAscending(a) {
  for (let i = 0; i < a.length; i++) {
    let minindex = i;
    //select the min value from i, n
    for (let j = i; j < a.length; j++) {
      if (a[minindex] > a[j]) {
        minindex = j;
      }
    }
    //replace i with min found in values after that
    //so 0 is replaced with the min element,1 is replaced with 2nd min etc
    let t = a[i];
    a[i] = a[minindex];
    a[minindex] = t;
  }
  console.log(a);
}

function selectionSortdescending(a) {
  for (let i = 0; i < a.length; i++) {
    let maxindex = i;
    //select the max value from i, n
    for (let j = i; j < a.length; j++) {
      if (a[maxindex] < a[j]) {
        maxindex = j;
      }
    }
    //replace i with max found in values after that
    //so 0 is replaced with the max element,1 is replaced with 2nd max etc
    let t = a[i];
    a[i] = a[maxindex];
    a[maxindex] = t;
  }
  console.log(a);
}
function main() {
  const arr = [
    [1, 2, 3, 4, 5, 6, 7],
    [7, 6, 5, 4, 3, 2, 1],
    [7, 10, -1, -9, 4, 3, 2],
  ];
  arr.forEach((a) => {
    selectionSortdescending(a);
    selectionSortAscending(a);
  });
}
main();
