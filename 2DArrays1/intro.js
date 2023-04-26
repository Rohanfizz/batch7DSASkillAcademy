let arr = [
    [1,2,3],
    [3,4,5],
    [6,7,8],
    [10,2,3]
]

// for(let i = 0;i<arr.length;i++){
//     for(let j  = 0;j<arr[0].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// for(let i = arr.length-1;i>=0;i--){
//     for(let j= arr[i].length-1;j>=0;j--){
//         console.log(arr[i][j]);
//     }
// }

for(let j  = 0;j<arr[0].length;j++){
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i][j]);
    }
}