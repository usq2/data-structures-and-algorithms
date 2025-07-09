/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let n = arr.length - 1;
  let zc = 0;
  for (let i = 0; i <= n - zc; i++) {
    if (arr[i] === 0) {
      if (i === n - zc) {
        arr[n] = 0;
        n -= 1;
        break;
      }
      zc++;
    }
  }
  let cf = n - zc;
  for (let i = cf; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zc] = 0;
      zc--;
      arr[i + zc] = 0;
    } else {
      arr[i + zc] = arr[i];
    }
  }
}
