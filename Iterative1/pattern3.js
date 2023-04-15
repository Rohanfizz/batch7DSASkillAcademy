let n = 5;

for(let i = 1;i<=n;i++){        //it prints n lines
    let stars = i;
    let spaces = n-i;

    let line ="";

    for(let j = 1;j<=spaces;j++){
        line+=" "; // this loops is appending spaces number of " "
    }
    for(let j = 1;j<=stars;j++){
        line+="*"; // this loops is appending stars number of "*"
    }

    console.log(line);
}