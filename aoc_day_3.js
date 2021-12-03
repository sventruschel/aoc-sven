// const fs = require("fs");
// const lines = fs
//   .readFileSync("input_day_3.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => x)
//   .map((x) => x);

const { clear } = require("console");

const lines = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

const mostFreqStr = (arr) => {
  var obj = {},
    mostFreq = 0,
    which = [];

  arr.forEach((ea) => {
    if (!obj[ea]) {
      obj[ea] = 1;
    } else {
      obj[ea]++;
    }

    if (obj[ea] > mostFreq) {
      mostFreq = obj[ea];
      console.log("ea", [ea]);
      which = [ea];
    } else if (obj[ea] === mostFreq) {
      which.push(ea);
    }
  });
  console.log(obj);
  return which;
};

const leastFreqStr = (arr, n) => {
  // Sort the array
  arr.sort();

  // find the min frequency using
  // linear traversal
  let min_count = n + 1,
    res = -1;
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else {
      if (curr_count < min_count) {
        min_count = curr_count;
        res = arr[i - 1];
      }

      curr_count = 1;
    }
  }

  // If last element is least frequent
  if (curr_count < min_count) {
    min_count = curr_count;
    res = arr[n - 1];
  }

  return res;
};

const getConsumption = (array) => {
  const newLines = array;
  let mostFreq = [];
  let leastFreq = [];
  for (let index = 0; index < 12; index++) {
    let numberArray = [];
    array.forEach((element) => {
      numberArray.push(element[index]);
    });
    mostFreq.push(mostFreqStr(numberArray));
    leastFreq.push(leastFreqStr(numberArray, numberArray.length));
  }
  const gamma = parseInt(+mostFreq.join(""), 2);

  const epsilon = parseInt(+leastFreq.join(""), 2);

  return gamma * epsilon;
};

const getConsumption2 = (array) => {
  let mostFreq = [];
  let leastFreq = [];
  for (let index = 0; index < 5; index++) {
    let numberArray = [];
    array.forEach((element) => {
      numberArray.push(element[index]);
    });
    mostFreq.push(mostFreqStr(numberArray));
    leastFreq.push(leastFreqStr(numberArray, numberArray.length));
  }

  const gamma = mostFreq;
  let newarr = array;
  console.log(mostFreq);
  mostFreq.forEach((el, i) => {
    newarr = newarr.filter((e) => e[i] === el[0]);
    console.log("el", el, "i", i);
    console.log("newarr", newarr);
  });
};

getConsumption2(lines);
