// https://leetcode.com/problems/max-consecutive-ones-iii/description/

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6


//Approach
// create a sliding window
// max len updated when number of zeroes = k
// start removing items from left and adding from right, above condition should remain satisified
// if it is then starting increasing window size

const input = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];

const solution = (arr, k) => {

    let i = 0,j = 0, zeros_count = 0, max_len = 0
   while(i < arr.length) {
        //expand the sliding window
        if (arr[i] === 0) zeros_count++;
        // shift the window by max len till then
        if (zeros_count > k) {
            if (arr[j] === 0) {
              zeros_count--;
            }
            j++;
        }
        if (zeros_count <= k)
          max_len = max_len < i - j + 1 ? i - j + 1 : max_len;
        i++;
        
    }
    return max_len;
}