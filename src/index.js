module.exports = function toReadable(number) {
  if (number === 0) return 'zero';  
  let numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    let n = number.toString();
    let result = [];
    for (let i = 0; i < n.length; i++) {
      if (+n[i] === 0) continue;
      if (n.length - i === 3) {
        result.push(numbers[+n[i]]);
        result.push(numbers[100]);
        continue;
      }
      if (n.length - i === 2) {
        if (+n[i] < 2) {
          result.push(numbers[+n[i] * 10 + +n[i + 1]]);
          return result.join(' ');
        }
        if (+n[i + 1] === 0) {
          result.push(numbers[+n[i] * 10]);
          return result.join(' ');
        }
        result.push(numbers[+n[i] * 10]);
        continue;
      }
      result.push(numbers[+n[i]]);
    }

    return result.join(' ');
};
