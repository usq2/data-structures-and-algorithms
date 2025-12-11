/**
 * Given a fixed-length integer array arr, 
 * duplicate each occurrence of zero, 
 * shifting the remaining elements to the right.
 * Note that elements beyond the length of the original array are not written.
 * Do the above modifications to the input array in place and do not return anything.
 * 
 * Input: arr = [1,0,2,3,0,4,5,0]
 * Output: [1,0,0,2,3,0,0,4]
 */
function duplicateZeros(arr: number[]): void {
  let n = arr.length - 1;
  let zero_count = 0;

  // Since all zeros have to be duplicated and remaining elements to
  // be ignored, we can safely ignore the elements exceeding
  // array size - number of zeros as they will become out of bounds
  for (let i = 0; i <= n - zero_count; i++) {
    if (arr[i] === 0) {
      //if a zero is enmcountered at the very end of array
      // handle that edge case
      if (i === n - zero_count) {
        // make last element as zero
        arr[n] = 0;
        // reduce the size of array by 1 because its the end so 
        // no need to duplicate
        n -= 1;
        // break out of the loop
        break;
      }
      zero_count++;
    }
  }
  let count_frequency = n - zero_count;
  // actually duplicate zeros now
  for (let i = count_frequency; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zero_count] = 0;
      // duplicated one zero
      zero_count--;
      arr[i + zero_count] = 0;
    } else {
      arr[i + zero_count] = arr[i];
    }
  }
}
