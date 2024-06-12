/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    // Initialize an array to hold the even numbers divisible by 3
    let validNums = [];
    
    // Iterate over the array to find the numbers that are even and divisible by 3
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
            validNums.push(nums[i]);
        }
    }
    
    // If no such numbers exist, return 0
    if (validNums.length === 0) {
        return 0;
    }
    
    // Calculate the sum of the valid numbers
    let sum = validNums.reduce((acc, val) => acc + val, 0);
    
    // Calculate the average and round down
    let average = Math.floor(sum / validNums.length);
    
    return average;
};
