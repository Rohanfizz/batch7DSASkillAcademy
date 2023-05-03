function stringWithDiffOfAdjChars(s) {
    var ans = "";
    for (var i = 1; i < s.length; i++) {
        var currAsciiCode = s.charCodeAt(i);
        var prevAcsiiCode = s.charCodeAt(i - 1);
        var diff = currAsciiCode - prevAcsiiCode;
        ans += s[i - 1] + diff.toString();
    }
    ans += s[s.length - 1];
    return ans;
}
console.log(stringWithDiffOfAdjChars("abBDC"));
