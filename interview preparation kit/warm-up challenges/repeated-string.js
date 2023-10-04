// There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

// Example
// s="abcac"
// n=10

// The substring we consider is abcacabcac, the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Returns

// int: the frequency of a in the substring

function repeatedString(s, n) {
    // Count the number of 'a's in the given string
    const countInString = (str) => {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
          count++;
        }
      }
      return count;
    };
  
    const length = s.length;
    const countOfAInString = countInString(s);
  
    // Calculate the number of times the string 's' repeats fully in 'n' characters
    const repetitions = Math.floor(n / length);
  
    // Calculate the remaining characters after the full repetitions
    const remainder = n % length;
  
    // Calculate the total count of 'a's
    const totalCount = countOfAInString * repetitions + countInString(s.slice(0, remainder));
  
    return totalCount;
  }