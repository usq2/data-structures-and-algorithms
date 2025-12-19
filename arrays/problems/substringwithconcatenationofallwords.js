// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

// Output: [6,9,12]

// Explanation:

// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

 

// Constraints:

// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

var findSubstring = function (s, words) {
  let j = words.length;
  let k = words[0].length;
  // the window has to be of window_len, no need to check windows below this length   
  let r = k * j - 1
  let l = 0;
  let ret_val = [];
  const wordFrequency = new Map ()
  words.forEach ((word) => {
    wordFrequency.set (word, (wordFrequency.get(word) || 0) + 1)
  })
  while (l <= s.length - j * k) {
    //my window
    let window_itr = l;
    let fmap = structuredClone(wordFrequency)
    while (window_itr <= r) {
      let w = s.substring(window_itr, window_itr + k);
      let count = fmap.get(w)
      if (count) {
        count-1 === 0?fmap.delete(w):fmap.set(w, count-1)
      } else {
        break;
      }
      if (fmap.size === 0) {
        ret_val.push(l)
        break;
      }
      window_itr += k;
    }
     l++;
     r++;
    fmap.clear();
  }
  return ret_val;
};

const findSubstring2 = (s, words) => {

  // create a frequency map of the all words in words array
  const k = words[0].length
  const frequencyMap = new Map()
  words.forEach ((word)=> {
    frequencyMap.set(word, (frequencyMap.get(word)||0)+1)
  })
  let left = 0
  //consider all the subarrays starting from 0 to words * length of one word
  let ret_val = []
  for (let offset = 0; offset < k; offset++) {
    left = offset;
    const currMap = new Map();
    let countOfWords = 0;
    for (let right = left; right < s.length; right += k) {
      // take substrings of size k -> length of one word
      let currWord = s.substring(right, right + k);
      // check if that substring exists in frequency map
      if (!frequencyMap.has(currWord)) {
        countOfWords = 0;
        currMap.clear();
        left = right+k;
        continue;
      }
      // if yes add to window map
      currMap.set(currWord, (currMap.get(currWord) || 0) + 1);
      // increment count in window counter
      countOfWords++;
      // if some word count is greater than that in frequency map
      while (currMap.get(currWord) > frequencyMap.get(currWord)) {
        //  shrink the window from left till it comes in level
        let shorten = s.substring(left, left+k)
        left += k
        let frequency = currMap.get(shorten)
        frequency - 1 === 0? currMap.delete(shorten): currMap.set(shorten, frequency-1)
        countOfWords--
      }
      // if size of window is equal to words*k add it to ret_val
      if (countOfWords === words.length) {
        ret_val.push(left);
      }
    }
  }
  return ret_val;
}

 const s1 = "abtytycdbarfoothefoobarman"; const words1 = ["bar", "foo"]
 const s2 = "wordgoodgoodgoodbestword"; const words2 = ["word", "good", "best", "word"]
 const s3 = "barfoofoobarthefoobarman"; const words3 = ["bar", "foo", "the"];
 const s4 = "wordgoodgoodgoodbestword"; const words4 = ["word", "good", "best", "good"];
 const s5 = "lingmindraboofooowingdingbarrwingmonkeypoundcake"; const words5 = ["fooo", "barr", "wing", "ding", "wing"];
 
//  console.log (findSubstring(s1, words1))
//  console.log (findSubstring(s2, words2))
//  console.log (findSubstring2(s5, words5))
//  console.log (findSubstring2(s4, words4))
//  console.log (findSubstring2(s3, words3))
//  console.log (findSubstring2(s2, words2))
 console.log (findSubstring2(s1, words1))