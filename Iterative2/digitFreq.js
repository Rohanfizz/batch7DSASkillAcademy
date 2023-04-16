let n = 321343393;
let d = 3;
let count= 0;

while(n > 0){
    if((n%10) == d){
        count++;
    }
    n=Math.floor(n/10);
}
console.log(count);