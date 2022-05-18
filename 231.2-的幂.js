/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // 2 的整次幂（2进制）首位是 1，后面全是0
  // 2 的整次幂 -1 与 2的整次幂相与则为0
  return n > 0 && !(n & (n - 1))
};
// @lc code=end

