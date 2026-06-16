// Given an integer x, return true if x is a , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//

// SOLUTION: 0(n)
function isPalindromeNumber(x) {
  // convert x to a string
  let strX = s.toString().replace(/\s/g, "");

  for (let i = 0; i < strX.length; i++) {
    if (strX[i] !== strX[strX.length - 1 - i]) {
      return false;
    }
  }
  return true;

  // using multiple pointers on the string
  // let start = 0;
  // let end = strX.length - 1

  // while (start < end) {
  //   if (strX[start] !== strX[end]) {
  //     return false;
  //   }
  //   start++;
  //   end--;
  // }

  // return true;
}
