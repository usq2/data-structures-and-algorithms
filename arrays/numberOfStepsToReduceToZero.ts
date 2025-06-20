// check if number is 0
function isOdd(num: number): boolean {
  return (num & 1) === 1;
}

// set 0th bit to zero if 1, step += 1
// right shift by 1 bit, step +=1
function numberOfSteps(num: number): number {
  let steps = 0;
  while (num > 0) {
    if (isOdd(num)) {
      num = num & ~1;
    } else {
      num = num >> 1;
    }
    steps += 1;
  }
  return steps;
}
