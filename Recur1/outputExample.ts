function f(n:number):void{
    console.log(n);
    f(n-1);
    console.log(n);
}

f(5);