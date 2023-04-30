function numberToString(n: number): string {
    // return numberToString.toString();
    return "" + n;
}
function stringToNumber(s: string): number {
    return parseInt(s);
}
function stringToFloat(s: string): number {
    return parseFloat(s);
}
console.log(numberToString(123456));
console.log(stringToFloat("123456.12345"));
let n= 8.12345;
console.log(n.toPrecision(10).toString());
