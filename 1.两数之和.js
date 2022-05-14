/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i],
        _target = target - num;
    if (obj.has(num)) {
      return [obj.get(num), i];
    } else {
      obj.set(_target, i);
    }
  }
  return [];
};
// @lc code=end

