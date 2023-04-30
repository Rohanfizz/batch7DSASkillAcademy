function numberToString(n) {
    // return numberToString.toString();
    return "" + n;
}
function stringToNumber(s) {
    return parseInt(s);
}
function stringToFloat(s) {
    return parseFloat(s);
}
console.log(numberToString(123456));
console.log(stringToFloat("123456.12345"));
var n = 8.12345;
console.log(n.toPrecision(10));
