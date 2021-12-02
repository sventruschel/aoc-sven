const fs = require("fs");
const lines = fs
  .readFileSync("input_day_2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => x);

const gogoSubmarine1 = (array) => {
  let x = 0;
  let y = 0;
  for (let index = 0; index < array.length; index++) {
    const el = array[index];
    if (el.includes("forward")) {
      const amount = +el.substr(el.length - 1, 1);
      x += amount;
    }
    if (el.includes("down")) {
      const amount = +el.substr(el.length - 1, 1);
      y += amount;
    }
    if (el.includes("up")) {
      const amount = +el.substr(el.length - 1, 1);
      y -= amount;
    }
  }
  return x * y;
};

const gogoSubmarine2 = (array) => {
  let x = 0;
  let y = 0;
  let aim = 0;

  for (let index = 0; index < array.length; index++) {
    const el = array[index];
    if (el.indexOf("forward") !== -1) {
      const amount = +el.substr(el.length - 1, 1);
      const newY = amount * aim;
      y += newY;
      x += amount;
    }

    if (el.indexOf("down") !== -1) {
      const amount = +el.substr(el.length - 1, 1);
      aim += amount;
    }

    if (el.indexOf("up") !== -1) {
      const amount = +el.substr(el.length - 1, 1);
      aim -= amount;
    }
  }
  return x * y;
};

console.log(gogoSubmarine1(lines));
console.log(gogoSubmarine2(lines));
