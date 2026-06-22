// Container With Most Water

// You are given an integer array heights where heights[i] represents the height of the ithith bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// SOLUTION: Multiple Pointers: 0(n)
function maxArea(nums) {
  let start = 0;
  let end = nums.length - 1;
  let area = 0;

  while (start < end) {
    // declare with as the difference between the start and end indices
    let width = end - start;
    // declare height as the smallest between nums[start] and nums[end]
    let height = Math.min(nums[start], nums[end]);
    // declare the result
    let result = height * width;
    // update the area with the maximum value
    area = Math.max(area, result);
    // check to increment or decrement the pointer
    if (nums[start] <= nums[end]) {
      start++;
    } else {
      end--;
    }
  }

  return area;
}
