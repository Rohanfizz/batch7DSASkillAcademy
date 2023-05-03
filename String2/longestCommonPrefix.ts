function longestCommonPrefix(arr: string[]): string {
    if(arr.length==0) return "";
    if(arr.length == 1) return arr[0];
    let ans: string = "";

    for(let idx=0;idx<arr[0].length;idx++){
        let me:string = arr[0][idx]; //char we will be searching for in all the strings
        for(let i = 1;i<arr.length;i++){
            if(arr[i].length <=idx) return ans; //if the ith string is shorter than the idx we are searcing for.
            if(me!=arr[i][idx]) return ans;
        }
        ans+=me;
    }
    return ans;
};