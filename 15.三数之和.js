/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  let list = [];
  // 排序
  nums.sort((a, b) => a - b);
  // 最小 + 最大 > 目标值 ，那么最大值左移，否则最小值右移
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      if (right === i) {
        right--;
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        list.push([nums[left], nums[i], nums[right]]);
        // 继续找
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return list;
};
// @lc code=end
