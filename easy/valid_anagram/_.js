// PROBLEM
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true
// Example 2:
// Input: s = "jar", t = "jam"
// Output: false

// SOLUTION: FREQUENCY COUNTER PATTERN

function validAnagram(s, t) {
  // check if the two strings have got the same length
  if (s.length !== t.length) {
    return false;
  }

  let sFrequency = {};
  let tFrequency = {};

  // loop to fill the frequency objects
  for (let val of s) {
    sFrequency[val] = (sFrequency[val] || 0) + 1;
  }

  for (let val of t) {
    tFrequency[val] = (tFrequency[val] || 0) + 1;
  }

  // check the object keys
  for (let key in sFrequency) {
    if (!(key in tFrequency)) {
      return false;
    }

    if (sFrequency[key] > tFrequency[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram((s = "racecar"), (t = "carrace")));
console.log(validAnagram((s = "jar"), (t = "jam")));
