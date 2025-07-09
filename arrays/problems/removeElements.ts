function removeElement(num: number[], val: number) {
  let k = 0;
  let j = 0;
  let n = num.length;
  for (let i = 0; i < n; i++) {
    if (num[i] === val) {
      k++;
      continue;
    } else if (num[i] === -1) {
      continue;
    } else {
      if (k > 0) {
        num[j++] = num[i];
        num[i] = -1;
      } else {
        j++;
      }
    }
  }
  return n - k;
}
function main() {
  let num = [0, 1, 2, 2, 3, 0, 4, 2];
  let val = 2;
  console.log(removeElement(num, val), num);
}
main();
