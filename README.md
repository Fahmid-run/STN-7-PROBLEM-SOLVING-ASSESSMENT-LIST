# JavaScript Problem Solving

A collection of 20 beginner-to-intermediate coding problems solved in plain JavaScript. The focus is on simple, readable solutions covering strings, arrays, math, and the two-pointer technique.

## Problems

| #  | Problem                            | Main idea                              |
|----|------------------------------------|----------------------------------------|
| 1  | Staircase                          | `repeat()` for spaces and `#`          |
| 2  | Grading Students                   | Round up to next multiple of 5         |
| 3  | Time Conversion                    | Parse AM/PM, convert to 24-hour        |
| 4  | String Repeat                      | Loop and concatenate                   |
| 5  | Reversed Strings                   | `split` / `reverse` / `join`           |
| 6  | Sum of Positive                    | Loop, skip non-positive values         |
| 7  | Grasshopper: Summation             | Formula `n(n+1)/2`                     |
| 8  | Convert a Boolean to a String      | Simple conditional                     |
| 9  | Fizz Buzz                          | Modulo checks                          |
| 10 | Running Sum of 1D Array            | Accumulator with `reduce`              |
| 11 | Richest Customer Wealth            | Sum each row, track the max            |
| 12 | Remove Duplicates from Sorted Array| Two pointers                           |
| 13 | Contains Duplicate                 | `Set` lookup                           |
| 14 | Move Zeroes                        | Two pointers, in-place swap            |
| 15 | Merge Sorted Array                 | Merge from the back                    |
| 16 | 3Sum                               | Sort + two pointers, skip duplicates   |
| 17 | Plus One                           | Carry from the last digit              |
| 18 | Reverse String                     | Two pointers, in-place swap            |
| 19 | Length of Last Word                | `trim` + `split(/\s+/)`                |
| 20 | Longest Common Prefix              | Shrink prefix until all strings match  |

## Project Structure

```
.
├── Solution.js   # All 20 solutions
└── README.md
```

Each solution is a standalone function with a JSDoc comment describing its parameters and return type, for example:

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) { ... };
```

## How to Run

You need [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/Fahmid-run/STN-7-PROBLEM-SOLVING-ASSESSMENT-LIST.git
   ```
2. Add a test call at the bottom of `Solution.js`:
   ```javascript
   console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
   ```
3. Run it:
   ```bash
   node Solution.js
   ```

## Resources

- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
