/**
 * Bubbles the max/min element to the top/end
 * 
 * Compares adjacent elements and interchanges them
 * to bring them in the correct order 
 * 
 * in every pass process elements that have not been moved to their correct places
 */
function bubbleSort(a) {
    let n = a.length
    for (let i = 0; i < n-1;i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (a[j] > a[j+1]) {
                let t = a[j]
                a[j] = a[j+1]
                a[j+1] = t
            }
        }
    }
    console.log (a)
}

function main() {
  const arr = [
    [1, 2, 3, 4, 5, 6, 7],
    [7, 6, 5, 4, 3, 2, 1],
    [7, 10, -1, -9, 4, 3, 2],
  ];
  arr.forEach((a) => {
    bubbleSort(a);
  });
}
main();