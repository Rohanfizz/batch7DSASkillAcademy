let s: string = "abcd";

function isPalindrome(s:string) : boolean {
    let sp:number = 0;
    let ep:number = s.length-1;
    while(sp<ep){
        if(s[sp] != s[ep]) return false;
        sp++;
        ep--;
    }
    return true;
}

console.log(s.substring(0,4))
for (let sp: number = 0; sp < s.length; sp++) {
    for(let ep:number = sp;ep<s.length;ep++){
        console.log(s.substring(sp,ep+1));
    }
}
console.log(isPalindrome("dabba"));
