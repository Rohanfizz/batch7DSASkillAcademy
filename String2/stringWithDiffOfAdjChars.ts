function stringWithDiffOfAdjChars(s: string) : string{
    let ans: string = "";

    for(let i = 1;i<s.length;i++){
        let currAsciiCode: number = s.charCodeAt(i);
        let prevAcsiiCode: number = s.charCodeAt(i-1);
        let diff : number = currAsciiCode - prevAcsiiCode;
        ans += s[i-1] + diff;
    }

    ans += s[s.length-1];

    return ans;
}

console.log(stringWithDiffOfAdjChars("abBDC"));