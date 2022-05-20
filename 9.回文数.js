/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // if (x < 0) return false;
  // x = x + '';
  // let a = x.split('').reverse();
  // for (let i = 0; i < x.length; i++) {
  //     if (x[i] !== a[i] ) return false
  // }  
  // return true

  return x == x.toString().split('').reverse().join('');
};
// @lc code=end
