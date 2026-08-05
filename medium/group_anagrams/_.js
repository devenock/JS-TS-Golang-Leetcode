// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]
//
// SOLUTION: Sorting
function groupAnagrams(strs) {
  // declare an empty hash map
  let myHash = {}
  // loop through the strs list
  for (let s of strs) {
    // sort the strings
    let sortedS = s.split("").sort().join('')
    // check if there is a match
    if (!myHash[sortedS]) {
      myHash[sortedS] = []
    }
    // if we find a match push it to the hash table
    myHash[sortedS].push(s)
  }
  return Object.values(myHash)
}
