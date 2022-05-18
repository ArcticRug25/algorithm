// 组合权限验证 虚拟dom例子
// 一个虚拟dom 有可能很多属性是动态，每一个状态标记一个2进制位
let STYLE = 1;
let CLASS = 1 << 1;
let CHILDREN = 1 << 2;

// 授权
let vnodeType = STYLE | CLASS

// 判断 &
console.log('vnodeType的类型 STYLE', !!(vnodeType & STYLE));
console.log('vnodeType的类型 CLASS', !!(vnodeType & CLASS));
console.log('vnodeType的类型 CHILDREN', !!(vnodeType & CHILDREN));

// 删除权限
vnodeType ^= CLASS;
console.log('vnodeType的类型 STYLE', !!(vnodeType & STYLE));
console.log('vnodeType的类型 CLASS', !!(vnodeType & CLASS));
console.log('vnodeType的类型 CHILDREN', !!(vnodeType & CHILDREN));
