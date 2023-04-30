var s = "abcd";
function isPalindrome(s) {
    var sp = 0;
    var ep = s.length - 1;
    while (sp < ep) {
        if (s[sp] != s[ep])
            return false;
        sp++;
        ep--;
    }
    return true;
}
console.log(s.substring(0, 4));
for (var sp = 0; sp < s.length; sp++) {
    for (var ep = sp; ep < s.length; ep++) {
        console.log(s.substring(sp, ep + 1));
    }
}
console.log(isPalindrome("dabba"));
