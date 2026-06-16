// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
//

// BRUTE FORCE SOLUTION: 0(n^2)
function productExceptSelf(nums) {
  // check if array is empty
  if (nums.length == 0) {
    return 0;
  }

  // create a result array
  let resultArr = [];

  // loop through the array twice
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        prod *= nums[j];
      }
    }
    resultArr.push(prod);
  }

  return resultArr;
}

// OPTIMIZED SOLUTION: 0(n)
// ALGORITHM
// Let n be the length of the array.
// Create three arrays of size n:

//     pref for prefix products
//     suff for suffix products
//     res for the final result

// Set:

//     pref[0] = 1 (nothing to the left of index 0)
//     suff[n - 1] = 1 (nothing to the right of last index)

// Build the prefix product array:

//     For each i from 1 to n - 1:
//         pref[i] = nums[i - 1] × pref[i - 1]

// Build the suffix product array:

//     For each i from n - 2 down to 0:
//         suff[i] = nums[i + 1] × suff[i + 1]

// Build the result:

//     For each index i, compute:
//         res[i] = pref[i] × suff[i]

// Return the result array.
