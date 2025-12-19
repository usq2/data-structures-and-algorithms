/**
 * Given a string s, find the length of the longest substring without duplicate characters.
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 */


const longestSubstring = (string) => {
  let l = 0,
    r = 0,
    max = -1;
  n = string.length;
  let hash_map = new Map();
  while (r < n) {
    //character should not be in map or should be outside of the current window
    if (!hash_map.has(string[r]) || hash_map.get(string[r]) < l) {
      max = max > r - l + 1 ? max : r - l + 1;
    } else {
      //when a character is found we will find out what its previous occurence was in window
      //shrink the window to one char after that
      //then update the new value
      l = hash_map.get(string[r]) + 1;
    }
    hash_map.set(string[r], r);
    r++;
  }
  return max;
};

const main = () => {
  const inputs = ["abcdbef", "aaaaaaa", "abababcde"];
  inputs.forEach((input) => {
    console.log(longestSubstring(input));
  });
};

main();