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

console.log(bubbleSort(arr));
