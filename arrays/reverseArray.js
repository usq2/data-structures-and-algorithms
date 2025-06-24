/***
 * You are given an array of integers arr[]. Your task is to reverse the given array.
Note: Modify the array in place.
 */

/***
 * Apporach 1:
 *  sort the array print in reverse order.
 * Approach 2:
 * use 2 pointers, start and end, keep swapping till start >=end
 */

function reverseArray(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let t = arr[start];
    arr[start] = arr[end];
    arr[end] = t;
    start++;
    end--;
  }
  return arr;
}

function main() {
  const arr = [
    [1, 4, 45, 6, 10, 8],
    [1, 2, 3, 4],
  ];
  arr.forEach((elem) => {
    console.log(reverseArray(elem));
  });
}
main();
