// PROBLEM
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

//SOLUTION: FREQUENCY COUNTER PATTERN
function hasDuplicate(nums) {
  // check if the array is empty
  if (nums.length == 0) {
    return false;
  }

  // define a frequency object
  let numsFrequency = {};

  for (let val of nums) {
    numsFrequency[val] = (numsFrequency[val] || 0) + 1;
  }

  for (let key in numsFrequency) {
    if (numsFrequency[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 3]));
