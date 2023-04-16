function getMaxValue(arr){
    let maxi = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > maxi) maxi = arr[i];
    }
    return maxi;
}
let arr = [6,2,1,5,4,3,8];

let rows = getMaxValue(arr);
let cols = arr.length;

for(let floor = rows;floor>0;floor--){
    let s = "";
    for(let i = 0;i<arr.length;i++){
        if(arr[i] >=floor) s+="*";
        else s+=" ";
    }
    console.log(s);
}
