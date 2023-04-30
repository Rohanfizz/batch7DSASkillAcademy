/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let train = 0;
    let maxi = -1000000000;
    // console.log(maxi);
    let sp = -1;
    let ep = -1;

    let csp = 0;
    for(let i = 0;i<nums.length;i++){
        let join = train + nums[i];
        let startNew = nums[i];

        if(startNew > join){
            csp = i;
        }
        train = Math.max(join,startNew);
        if(maxi < train){
            sp = csp;
            ep = i;
            maxi = train;
        }
    }
    console.log(sp,ep);
    return maxi;
};
