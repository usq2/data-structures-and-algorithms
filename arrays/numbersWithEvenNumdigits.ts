function findDigits(num: number): boolean {
  let digit = 0;
  while (num >= 1) {
    num = num / 10;
    digit++;
  }
  return (digit & 1) === 0;
}
function findNumbers(nums: number[]): number {
  let digs = 0;
  nums.forEach((num) => {
    if (findDigits(num)) digs++;
  });
  return digs;
}
function main() {
  const input = [100000];
  console.log(findNumbers(input));
  return;
}

main();
