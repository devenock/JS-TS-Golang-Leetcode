// PROBLEM
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true
// Example 2:
// Input: s = "jar", t = "jam"
// Output: false
//
// BRUTE FORCE(0(n^2))
function validAnagramBruteForceSolution(s, t) {
  // check the length of the strings
  if (s.length !== t.length) {
    return false;
  }

  // convert t to an array
  let arrT = t.split("");

  // loop through s and check the index of each character in arrT
  for (let val of s) {
    // create an index variable to help compare the characters
    let indexT = arrT.indexOf(val);

    // check to see if the s characters are existing in the arrT
    if (indexT === -1) {
      return false;
    }
    arrT.splice(indexT, 1);
  }

  return true;
}

// SOLUTION: FREQUENCY COUNTER PATTERN(O(n))

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

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function checkAnagram(s, t) {
  // first check if they have the same length
  if (s.length !== t.length) {
    return false;
  }

  // define the frequency objects
  let frequency1 = {};
  let frequency2 = {};

  // loop through s and assign frequencies
  for (let val of s) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }

  // loop through t and assign frequencies
  for (let val of t) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  // check the count of the frequencies
  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }

    if (frequency1[key] > frequency2[key]) {
      return false;
    }
  }
  return true;
}
