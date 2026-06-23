// Given a sorted array of integers nums, determine if there exists a pair of numbers that sum to a given target.

// Example 1:

// Input:

// nums = [1,3,4,6,8,10,13]
// target = 13

// Output:

// True # (3 + 10 = 13)

// Example 2:

// Input:

// nums = [1,3,4,6,8,10,13]
// target = 6

// Output:

// False
//
// SOLUTION

function twoSumOfSortedArray(nums, target) {
  // declare the pointers
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return true;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
