// You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

// Example
// arr = [7,1,3,2,4,5,6]

// Perform the following steps:

// i arr swap (indices)
// 0 [7, 1, 3, 2, 4, 5, 6] swap (0,3)
// 1 [2, 1, 3, 7, 4, 5, 6] swap (0,1)
// 2 [1, 2, 3, 7, 4, 5, 6] swap (3,4)
// 3 [1, 2, 3, 4, 7, 5, 6] swap (4,5)
// 4 [1, 2, 3, 4, 5, 7, 6] swap (5,6)
// 5 [1, 2, 3, 4, 5, 6, 7]
// It took 5 swaps to sort the array.

// Function Description

// Complete the function minimumSwaps in the editor below.

// minimumSwaps has the following parameter(s):

// int arr[n]: an unordered array of integers
// Returns

// int: the minimum number of swaps to sort the array




function minimumSwaps(arr) {
    const n = arr.length;
    let swaps = 0;
  
    // Create an array to track the current positions of the elements
    const position = new Array(n + 1);
    for (let i = 0; i < n; i++) {
      position[arr[i]] = i + 1;
    }
  
    // Perform swaps to sort the array
    for (let i = 1; i <= n; i++) {
      // If the element is already in the correct position, continue to the next element
      if (arr[i - 1] === i) continue;
  
      // Swap the current element with the element at its correct position
      const temp = arr[i - 1];
      arr[i - 1] = i;
      arr[position[i] - 1] = temp;
  
      // Update the positions of the swapped elements
      position[temp] = position[i];
      position[i] = i;
  
      swaps++;
    }
  
    return swaps;
  }