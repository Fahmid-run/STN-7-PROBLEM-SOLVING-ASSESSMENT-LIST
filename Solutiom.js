// PROBLEM 1: Staircase
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
  for (let i = 0; i < n; i++) {
    console.log("#");

    for (let j = i + 1; j <= i + 1; j++) {}
  }
};

// staircase(4);

// PROBLEM 2: Grading Students

/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {};

// PROBLEM 3
// Problem 4: String Repeat
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  let newStr = "";
  if (n <= 0) {
    return "";
  }
  for (let i = 0; i < n; i++) {
    newStr += s;
  }

  return newStr;
};

// PROBLEM 5:Reversed Strings
/**
 * @param {string} str
 * @return {string}
 */

var solution2 = function (str) {
  if (str.length <= 0) {
    return "";
  }
  let temp = "";

  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }

  return temp;
};
// PROBLEM 6:Sum of Positive
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  let sum = 0;
  for (const element of arr) {
    if (element <= 0) {
      continue;
    }

    sum += element;
  }

  return sum;
};

// PROBLEM 7:Grasshopper — Summation
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  if (num <= 0) {
    return 0;
  }
  let sum = (num * (num + 1)) / 2;

  return sum;
};

// PROBLEM 8 :Convert a Boolean to a String
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  if (b) {
    return "true";
  }
  return "false";
};

// PROBLEM 9:Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let temp = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      temp.push("FizzBuzz");
      continue;
    }
    if (i % 3 == 0) {
      temp.push("Fizz");
      continue;
    }

    if (i % 5 == 0) {
      temp.push("Buzz");
      continue;
    }

    temp.push(i.toString());
  }

  return temp;
};

// PROBLEM 10:Running Sum of 1D Array

// PROBLEM 11
// PROBLEM 12
// PROBLEM 13
// PROBLEM 14
// PROBLEM 15
// PROBLEM 16
// PROBLEM 17
// PROBLEM 18
// PROBLEM 19
