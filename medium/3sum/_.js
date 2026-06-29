// Given an input integer array nums, write a function to find all unique triplets[nums[i], nums[j], nums[k]] such that i, j, and k are distinct indices,
// and the sum of nums[i], nums[j], and nums[k] equals zero.Ensure that the resulting list does not contain any duplicate triplets.

// Input:

// nums = [-1,0,1,2,-1,-1]

// Output:

// [[-1,-1,2],[-1,0,1]]

// SOLUTION
function threeSum(nums) {
  // first sort the array
  nums.sort((a, b) => a - b);
  let result = [];
  // loop through the array
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
  }
}
