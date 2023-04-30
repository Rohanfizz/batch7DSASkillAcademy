function compress(s) {
    var ans = "";
    var i = 0;
    var j = 0;
    while (i < s.length) {
        ans += s[i];
        var count = 0;
        while (j < s.length && s[i] == s[j]) {
            count++;
            j++;
        }
        if (count > 1)
            ans += count;
        i = j;
    }
    return ans;
}
console.log(compress("aaabbdddddcefgh"));
