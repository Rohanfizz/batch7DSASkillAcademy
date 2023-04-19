let arr= [1,2,3,4,5];

function reverseAll(arr){
    let l = 0;
    let r = arr.length-1;

    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
    return arr;
}
function reverseRange(arr,l,r){
    //should return an array where the segment l to r is reversed
    while(l<r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
    return arr;
}

// console.log(reverseAll(arr));
console.log(reverseRange(arr,1,3));