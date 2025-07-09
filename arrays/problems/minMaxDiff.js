/**
 * Given an array prices[] of length n, representing the prices of the stocks on different days.
 *  The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.
 * Here one transaction means 1 buy + 1 Sell.
 * If it is not possible to make a profit then return 0.
 * Note: Stock must be bought before being sold.
 */
/**
 * Solution: one variable tracks currMinimum value in array till index i, second tracks max profit till index i
 * keep updating for each iteration
 */

function maxProfit(a) {
  let currMin = a[0],
    profit = 0,
    n = a.length;
  for (let i = 0; i < n; i++) {
    if (a[i] - currMin > profit) {
      profit = a[i] - currMin;
    }
    if (a[i] < currMin) currMin = a[i];
  }
  return profit;
}
function main() {
  const arr = [
    [7, 10, 1, 3, 6, 9, 2],
    [7, 6, 4, 3, 1],
    [1, 3, 6, 9, 11],
    [10, 10, 10, 10, 11],
    [5, 8, 6],
  ];
  arr.forEach((elem) => {
    console.log(maxProfit(elem));
  });
}
main();
