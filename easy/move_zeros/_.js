// Given an integer array nums, write a function to rearrange the array by moving all
// zeros to the end while keeping the order of non - zero elements unchanged.Perform this
// operation in -place without creating a copy of the array.

// Input:

// nums = [2,0,4,0,9]

// Output:

// [2,4,9,0,0]
//
//
// SOLUTION: TWO POINTERS: 0(n)

function moveZeros(nums) {
  // edge case
  if (nums.length == 0) {
    return -1;
  }
  // declare variable to hold the position of the next non zero value
  let nextNonZeroVal = 0;

  // loop through the array to check the values
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[nextNonZeroVal], nums[i]] = [nums[i], nums[nextNonZeroVal]];
      nextNonZeroVal++;
    }
  }
}
