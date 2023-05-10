function printSubseq(arr, idx, ssf) {
    if (idx == arr.length) {
        console.log(ssf);
        return;
    }
    //if i not pick
    printSubseq(arr, idx + 1, ssf);
    //if i pick
    printSubseq(arr, idx + 1, ssf + " " + arr[idx] + ", ");
}
var arr = [10, 20, 30];
printSubseq(arr, 0, "");
