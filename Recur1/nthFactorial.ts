function factorial(n:number):number{
    if(n == 1) return 1;
    let factnm1 = factorial(n-1);
    return (n * factnm1);
}
console.log(factorial(5));