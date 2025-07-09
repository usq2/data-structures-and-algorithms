/**
 * Insertion sort is a simple sorting algorithm that works by iteratively 
 * inserting each element of an unsorted list into its correct position in a sorted portion of the list.
 *  It is like sorting playing cards in your hands. 
 * You split the cards into two groups: the sorted cards and the unsorted cards. 
 * Then, you pick a card from the unsorted group and put it in the right place in the sorted group.
 * We start with the second element of the array as the first element is assumed to be sorted.
 * Compare the second element with the first element if the second element is smaller then swap them.
 * Move to the third element, compare it with the first two elements, and put it in its correct position
 * Repeat until the entire array is sorted.
 */

function insertionSort (a) {
    for (let i = 1; i< a.length;i++) {
        let key = a[i]
        let j = i-1
        while (j >=0 && a[j] > key) {
            a[j+1] = a[j]
            j--
        }
        a[j+1] = key
     }
     console.log(a)
}
function main() {
  const arr = [
    [1, 2, 3, 4, 5, 6, 7],
    [7, 6, 5, 4, 3, 2, 1],
    [7, 10, -1, -9, 4, 3, 2],
  ];
  arr.forEach((a) => {
    insertionSort(a);
  });
}
main();