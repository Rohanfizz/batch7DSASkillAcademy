let arr = [11,25,36,42,51,69,72,88];

let target = 89;

function binarySearch(arr,target){
    let l = 0;
    let r = arr.length-1;
    while(l<=r){
        let mid = parseInt((l+r)/2);

        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] < target){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return -1; //i was not able to find the target value
}
console.log(binarySearch(arr,target));