/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var isPossible = function(weights,cap,d){
    let i = 0;
    let currShip = 0;
    while(i<weights.length){
        currShip += weights[i];
        if(currShip > cap){
            d--;
            currShip = weights[i];
            if(d == 0) return false;
            if(currShip > cap) return false;
        }
        i++;
    }
    return true;
}
var shipWithinDays = function(weights, days) {
    let l = 1;
    let r= 0;
    for(let i = 0;i<weights.length;i++) r+=weights[i];
    let ans = -1;
    while(l<=r){
        let mid = parseInt((l+r)/2); //capacity

        if(isPossible(weights,mid,days)){
            ans = mid;
            r = mid-1;
        }else l = mid+1;
    }
    return ans;

};








