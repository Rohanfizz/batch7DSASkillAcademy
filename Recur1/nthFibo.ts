function fibo(n:number):number{
    //base case
    if(n == 2) return 1;
    if(n == 1) return 0;
    let nm1f = fibo(n-1);
    let nm2f = fibo(n-2);
    return nm1f+nm2f;
}

console.log(fibo(7));