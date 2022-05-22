/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let pathArr = path.split('/'),
      stack = [];
  pathArr.forEach(ele => {
    if (ele === '..') {
      stack.pop();
    } else if (ele && ele !== '.') {
      stack.push(ele);
    }
  })

  return '/' + stack.join('/');
};
// @lc code=end

