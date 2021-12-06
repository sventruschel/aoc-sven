const fs = require("fs");
const lines = fs
  .readFileSync("input_day_3.txt", { encoding: "utf-8" })
  .split("\n");

const getBitsFromPosition = (array, i) => array.map((e) => e[i]);

const getBitCount = (array, dir) => {
  let zeroCount = 0;
  let oneCount = 0;

  array.forEach((e) => (e === "0" ? zeroCount++ : oneCount++));

  if (zeroCount === oneCount) {
    return dir === ">" ? "1" : "0";
  } else if (oneCount > zeroCount) {
    return dir === ">" ? "1" : "0";
  }
  return dir === ">" ? "0" : "1";
};

const getConsumption = (array) => {
  let mostFreq = [],
    leastFreq = [];
  for (let index = 0; index < 12; index++) {
    let numberArray = [];
    array.forEach((element) => {
      numberArray.push(element[index]);
    });
    mostFreq.push(getBitCount(numberArray, ">"));
    leastFreq.push(getBitCount(numberArray, "<"));
  }
  const gamma = parseInt(mostFreq.join(""), 2);
  const epsilon = parseInt(leastFreq.join(""), 2);
  return gamma * epsilon;
};

const getRating = (array, dir) => {
  let ac = array;
  for (let i = 0; i < 12; i++) {
    const pos_row = getBitsFromPosition(ac, i);
    const bitCount = getBitCount(pos_row, dir);
    if (ac.length > 1) {
      ac = ac.filter((e) => e[i] === bitCount);
    }
  }
  return parseInt(ac[0], 2);
};

const getLifeSupportRating = (array) => {
  const ogyxenRating = getRating(array, ">");
  const co2Rating = getRating(array, "<");
  return ogyxenRating * co2Rating;
};

console.log("part 1: ", getConsumption(lines));
console.log("part 2: ", getLifeSupportRating(lines));
