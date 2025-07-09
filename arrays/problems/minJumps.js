function minJumps(arr) {
    // code here
    let j = 0, c = 0
    while (j < arr.length-1) {
        j+=arr[j];
        while (arr[j] === 0) {j--; if (j===0) return -1}
        c++
    }
    return c
}

function main () {
    let arr = [[1,4,3,2,5,6],[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],[9,10,1,2,3,4,8,0,0,0,0,0,0,1]]
    arr.forEach ((a) => {
        console.log(minJumps(a));
    }
)
    
}
main()