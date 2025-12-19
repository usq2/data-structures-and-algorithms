/**
 * Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * Example 1
 * Input: nums = [2, 3, 5, -2, 7, -4]
 * Output: 15
 * Explanation:
 * The subarray from index 0 to index 4 has the largest sum = 15
 */

/**
 * Naive approach
 *  generate all subarrays
 *   track maximum say in that o(n^2)
 */
/**
 * Kadanes algorithm says
 *  keeping adding elements of array,
 *  if at any index the sum turns negative
 *   start a new subarray from the next index
 */
const kadanesAlgorithm = (arr) => {

    let sum = 0, start_index = 0, end_index=0,max_sum=-1
    arr.forEach ((elem,idx) => {
        sum += elem
        if (sum < 0) {
            sum = 0;
            // start a new subarray
            start_index=idx
        }
        if (max_sum < sum) {
            max_sum = sum;
            end_index = idx
        }
    })
    return {start_index, end_index, max_sum}
}

console.log(kadanesAlgorithm([2, 3, 5, -2, 7, -4]));