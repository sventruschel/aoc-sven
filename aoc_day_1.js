const fs = require("fs");
const lines = fs
  .readFileSync("input_day_1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

function countBiggerThanPrevious1(array) {
  var count = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      count++;
    }
  }
  return count;
}

function countBiggerThanPrevious2(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] + array[i + 1] + array[i + 2] <
      array[i + 1] + array[i + 2] + array[i + 3]
    ) {
      count++;
    }
  }
  return count;
}

console.log(countBiggerThanPrevious1(lines));
console.log(countBiggerThanPrevious2(lines));
