/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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
var rotate = function(nums, k) {
    //reverse last k people
    let n = nums.length;
    k = k%n;// to handle the cases where k > n and prevent errors
    nums = reverseRange(nums,n-k,n-1);
    //revese first remaining people
    nums = reverseRange(nums,0,n-k-1);
    //reverse the whole array
    nums = reverseRange(nums,0,n-1);
};