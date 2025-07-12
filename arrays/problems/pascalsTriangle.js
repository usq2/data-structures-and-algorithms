function factorial (n) {
    if (n === 1n || n=== 0n) return 1n
    else return n*factorial(n-1)
}
function coeff (n,r) {
   let nf = factorial(n)
   let fr = factorial(r)
   let fnr = factorial(n-r)
   let m = fr*fnr
   return nf/m
}
function generate (n) {
    let ret = []
    for (let j = 0; j < n;j++) {
        let vals = []
        for (let i = 0; i<=j;i++){
            vals.push (coeff(j,i))
        }
        ret.push (vals)
    }
    return ret
}
function main () {
    console.log (generate(24))
}
main()