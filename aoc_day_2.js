const array = ["forward 5", "down 2"];

const fs = require("fs");
const lines = fs
  .readFileSync("input_day_2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => x);

const gogoSubmarine = (array) => {
  let x = 0;
  let y = 0;
  let aim = 0;

  for (let index = 0; index < array.length; index++) {
    const el = array[index];
    if (el.indexOf("forward") !== -1) {
      const amount = +el.substr(el.length - 1, 1);
      // console.log("amount", amount, "aim", aim);
      const newY = amount * aim;
      y += newY;
      x += amount;
    }

    if (el.indexOf("down") !== -1) {
      const amount = +el.substr(el.length - 1, 1);
      //   y += amount;
      aim += amount;
    }

    if (el.indexOf("up") !== -1) {
      const amount = +el.substr(el.length - 1, 1);
      //   y -= amount;
      aim -= amount;
    }
    console.log("x", x, "aim", aim, "index", index);
    console.log("y", y, "aim", aim, "index", index);
  }
  return x * y;
};

console.log(gogoSubmarine(lines));
