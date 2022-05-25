let arr = [366, 240, 866, 115, 9, 760, 553, 354, 232, 374, 450, 426, 944, 2, 393, 143];

function bubbleSort(arr) {
  let len = arr.length - 1;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let flag = arr[0],
    left = [],
    right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat(flag, quickSort(right));
}

// 原地快排 （双指针） 左指针找到一个比标志位大的，右指针找到一个比标志位小的，则左指针的值和右指针值交换位置
function quick(arr, start, end) {
  let init = start;
  let flag = arr[init];
  start++;
  while (start <= end) {
    while (arr[end] > flag) {
      end--;
    }
    while (arr[start] < flag) {
      start++;
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
  return start
}

function quickSort1(arr, start, end) {
  if (start < end) {
    let index = quick(arr, start, end); // 标志位的值
    quickSort1(arr, start, index - 1);
    quickSort1(arr, index, end);
  }
  return arr;
}


console.log(bubbleSort(arr));
console.log(quickSort(arr));
console.log(quickSort1(arr, 0, arr.length - 1));
