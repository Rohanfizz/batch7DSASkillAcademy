function compress(s: string): string {
    let ans:string ="";

    let i : number = 0;
    let j : number = 0;
    while(i<s.length){
        ans+=s[i];

        let count:number = 0;
        while(j<s.length && s[i] == s[j]){
            count++;
            j++;
        }
        if(count > 1) ans += count;
        i = j;
    }

    return ans;
}
console.log(compress("aaabbdddddcefgh"))