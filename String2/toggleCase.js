function toggleCase(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i);
        if (ascii >= 97) {
            //this is a lowercase letter,
            //in order to convert this character into uppercase
            //i will have to subtract 32 in the ascii value
            ascii -= 32;
            ans += String.fromCharCode(ascii);
        }
        else {
            //this is an uppercase letter
            //in order to convert it to lowercase
            //i will have to add 32 to the ascii value
            ascii += 32;
            ans += String.fromCharCode(ascii);
        }
    }
    return ans;
}
console.log(toggleCase("AbCdEEEeee"));
