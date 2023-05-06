function factorial(n) {
    if (n == 1)
        return 1;
    var factnm1 = factorial(n - 1);
    return (n * factnm1);
}
console.log(factorial(5));
