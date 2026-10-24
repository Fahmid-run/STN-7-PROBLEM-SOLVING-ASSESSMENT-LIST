// PROBLEM 1: Staircase
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {};

// PROBLEM 2: Grading Students

/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
  grades.forEach((value, index, arr) => {
    let nextMultiple = value - (value % 5) + 5;
    if (value < 38) {
      return;
    }
    if (nextMultiple - value < 3) {
      arr[index] = nextMultiple;
    }
  });

  return grades;
};

// PROBLEM 3: Time Conversion

/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
  let splittedArr = s.split(":");
  let hour = splittedArr[0];
  let min = splittedArr[1];
  let second = splittedArr[2].slice(0, 2);
  let period = splittedArr[2].slice(2);

  if (period === "AM") {
    if (hour == "12") {
      hour = "00";
    }
  } else {
    if (hour !== "12") {
      hour = String(Number(hour) + 12);
    }
  }

  return `${hour}:${min}:${second}`;
};

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

var solution = function (str) {
  if (str.length <= 0) {
    return "";
  }

  return str.split("").reverse().join("");
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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const arr = [];

  nums.reduce((acc, curr) => {
    acc = acc + curr;
    arr.push(acc);
    return acc;
  }, 0);

  return arr;
};
// PROBLEM 11: Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    const element = accounts[i];
    const currSum = element.reduce((accu, curr) => accu + curr, 0);

    if (currSum > maxWealth) {
      maxWealth = currSum;
    }
  }

  return maxWealth;
};

// PROBLEM 12:Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

// Problem 13: Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const maps = new Map();

  for (const num of nums) {
    if (maps.has(num)) {
      return true;
    }

    maps.set(num);
  }

  return false;
};

// Problem 14: Move Zeroes

/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
};

// PROBLEM 15: Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

// Problem 16: 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {};

// Problem 17: Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
};

// PROBLEM 18:: Reverse String
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let tmp;

    tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;

    start++;
    end--;
  }
};

// PROBLEM 19: Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let tempArr = s.trim().split(/\s+/);

  return tempArr[tempArr.length - 1].length;
};

// Problem 20: Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
