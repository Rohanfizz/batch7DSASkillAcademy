function printHollowStar(n) {
    var stars = 1;
    var spaces = Math.floor(n / 2);
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= spaces; j++)
            s += " ";
        s += "*";
        for (var j = 1; j <= stars - 2; j++)
            s += " ";
        if (i != 1 && i != n)
            s += "*";
        console.log(s);
        if (i <= n / 2) {
            stars += 2;
            spaces--;
        }
        else {
            stars -= 2;
            spaces++;
        }
    }
}
printHollowStar(11);
