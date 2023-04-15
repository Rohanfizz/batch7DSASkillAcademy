let n =5;

for(let line = n;line>=1;line--){
    let ansForThisLine = "";//stores the answer for this particular line
    for(let j = 1;j<=line;j++) ansForThisLine+="*";
    console.log(ansForThisLine);
}