let n = 3;

for(let line = 1;line<=n;line++){
    let ansForThisLine = "";//stores the answer for this particular line
    for(let j = 1;j<=line;j++) ansForThisLine+="*";
    console.log(ansForThisLine);
}