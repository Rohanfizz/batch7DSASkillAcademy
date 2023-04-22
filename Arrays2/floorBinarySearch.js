let arr = [11,25,36,42,51,69,72,88];

let target =parseInt(process.argv[2]);
// console.log();
function floorSearch(arr,target){
    let l = 0;
    let r = arr.length-1;
    let floor = -1;

    while(l<=r){
        let mid= parseInt((l+r)/2);
        if(arr[mid] == target){
            return arr[mid];
        }else if(arr[mid]<target){
            floor = arr[mid];
            l = mid+1;
        }else r = mid-1;
    }
    return floor;
}
console.log(floorSearch(arr,target));