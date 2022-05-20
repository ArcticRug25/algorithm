/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let i = Math.floor(nums.length / 2);
  let k = 0;
  nums.forEach((num, idx) => {
    k += Math.abs(nums[i] - num);
  })
  return k
};
// @lc code=end
