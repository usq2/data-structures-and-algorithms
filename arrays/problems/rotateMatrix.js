/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */

//op=[[7,4,1],[8,5,2],[9,6,3]]
let input1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//op=[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
let input2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const rotate90Deg = (arr)=> {

     const n = matrix.length;

     // Iterate through the layers (concentric squares)
     for (let i = 0; i < Math.floor(n / 2); i++) {
       // Iterate through the elements in the current side
       for (let j = i; j < n - 1 - i; j++) {
         // 1. Save the Top-Left element
         let temp = matrix[i][j];

         // 2. Move Bottom-Left to Top-Left
         // (n - 1 - j) is the row, (i) is the column
         matrix[i][j] = matrix[n - 1 - j][i];

         // 3. Move Bottom-Right to Bottom-Left
         matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];

         // 4. Move Top-Right to Bottom-Right
         matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];

         // 5. Move saved Top-Left to Top-Right
         matrix[j][n - 1 - i] = temp;
       }
     }
} 