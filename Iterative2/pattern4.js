let n = 7;

let stars = 1;
let spaces = Math.floor(n/2);

for(let i = 1;i<=n;i++){
    let s = "";
    for(let j = 1;j<=spaces;j++) s+=" ";
    for(let j = 1;j<=stars;j++) s+="*";
    console.log(s);

    if(i <= n/2){
        stars+=2;
        spaces--;
    }else{
        stars-=2;
        spaces++;
    }
}