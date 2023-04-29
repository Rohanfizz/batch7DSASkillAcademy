let arr = [
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,1],
    [0,0,0,0,0],
    [0,1,0,1,1],
]
let i = 1;
let j = 0;
function exitPoint(arr,i,j){
    let dir = "R";
    while(i>=0 && j>=0 && i<arr.length && j<arr[0].length){
        if(arr[i][j] == 1){
            arr[i][j]=0;
            //change dir
            if(dir == "R") dir = "D";
            else if(dir =="D") dir = "L";
            else if(dir == "L") dir = "U";
            else if(dir == "U") dir = "R"; 
        }

        //move in curr dir
        if(dir == "R") j++;
        else if(dir=="D") i++;
        else if(dir =="L") j--;
        else if(dir == "U") i--;
    }
    //we are taking a step in the opposite direction of the final dir.
    if(dir == "R") j--;
    else if(dir=="D") i--;
    else if(dir =="L") j++;
    else if(dir == "U") i++;

    return [i,j];
}
console.log(exitPoint(arr,i,j));