function setZeroes (matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let fc = -1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j< n;j++) {
            if (matrix[i][j] === 0) {
                if (j===0) fc=0
              //set first row this column as 0
              if (j!==0)matrix[0][j] = 0;
              //set this row first column as 0
              matrix[i][0] = 0;
            }
        }
    }
    for (let i = 1; i < m;i++) {
        if (matrix[i][0] === 0) {
            for (let j = 0; j<n;j++) {
                matrix[i][j] = 0
            }
        }
    }
    for (let j = 1; j<n;j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i <m;i++) {
                matrix[i][j] = 0
            }
        }
    }
    if (matrix[0][0] === 0) {
        //set first row to 0
        for (let j =0 ;j <n;j++) {
            matrix[0][j] = 0
        }
    }
   if (fc === 0) {
    for (let i=0; i <m; i++) {
        matrix[i][0] = 0
    }
   }
    return matrix
    
}

function main () {
    // const matrix = [
    //   [1, 2, 3, 4],
    //   [5, 0, 7, 8],
    //   [0, 10, 11, 12],
    //   [13, 14, 15, 0],
    // ];
    const matrix = [[1,1,1,0],[1,1,1,1],[0,1,1,1]]
    // const matrix = [[1,0]]
    console.log (setZeroes(matrix))
}

main()