// Write a function to sort a given integer array nums in -place(and without the built -in sort function),
// where the array contains n integers that are either 0, 1, and 2 and represent the colors red, white, and blue.
// Arrange the objects so that same - colored ones are adjacent, in the order of red, white, and blue(0, 1, 2).

// Input:

// nums = [2,1,2,0,1,0,1,0,1]

// Output:

// [0,0,0,1,1,1,1,2,2]

// SOLUTION: TWO POINTERS: 0(n)

function sortColors(nums) {
  // declare the pointers and the current values
  let left = 0;
  let right = nums.length - 1;
  let currentVal = 0;

  // define condition
  while (currentVal <= right) {
    if (nums[currentVal] === 0) {
      [nums[left], nums[currentVal]] = [nums[currentVal], nums[left]];
      left++;
      currentVal++;
    } else if (nums[currentVal] === 2) {
      [nums[currentVal], nums[right]] = [nums[right], nums[currentVal]];
      right--;
    } else {
      currentVal++;
    }
  }
}
