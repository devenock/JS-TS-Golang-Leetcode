// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:
// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
// Example 2:
// Input: s = "tab a cat"
// Output: false
// Explanation: "tabacat" is not a palindrome.
//
// for-loop solution(0(n))
function isPalindromeBruteForce(s) {
  // remove the special characters and the space using regex(/[^a-z0-9]/g, "")
  let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // check if the string is empty because and empty string is a valid palindrome
  if (cleanStr.length === 0) {
    return true;
  }

  for (let i = 0; i < cleanStr.length; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// USING MULTIPLE POINTERS PATTERN(0(n))
function isPalindrome(s) {
  // remove the special characters and the space using regex(/[^a-z0-9]/g, "")
  let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // check if the string is empty because and empty string is a valid palindrome
  if (cleanStr.length === 0) {
    return true;
  }

  // declare the pointers
  let start = 0;
  let end = cleanStr.length - 1;

  // check condition
  while (start < end) {
    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
