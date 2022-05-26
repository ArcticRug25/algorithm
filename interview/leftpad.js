// 二分

let s = 'hello';
console.log(s.padStart(10, '0'));

function leftpad(str, length, ch) {
  let len = length - str.length + 1;
  return Array(len).join(ch) + str;
}

function leftpad2(str, length, ch) {
  let len = str.length,
    total = '';

  while (true) {
    // len % 2 === 1
    if (len & 1) {
      total += ch;
    }
    if (len === 1) {
      return total + str;
    }
    ch += ch
    len = len >> 1;
    // len = parseInt(len / 2);
  }
}

console.log(leftpad2('hello', 10, 'a'))
