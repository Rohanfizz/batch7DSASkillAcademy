function mergeTwoSortedArrays(A, B) {
    var C = [];
    var i = 0;
    var j = 0;
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            C.push(A[i]);
            i++;
        }
        else {
            C.push(B[j]);
            j++;
        }
    }
    //the above loop can break because  of 2 cases:-
    //1st = if i goes out of bounds of A,we have to push rest of the elements of B
    if (i >= A.length) {
        while (j < B.length) {
            C.push(B[j]);
            j++;
        }
    }
    //1st = if j goes out of bounds of B,we have to push rest of the elements of A
    if (j >= B.length) {
        while (i < A.length) {
            C.push(A[i]);
            i++;
        }
    }
    return C;
}
function mergeSort(A, low, high) {
    if (low == high) {
        //there is only one element
        var res_1 = [];
        res_1.push(A[low]);
        return res_1;
    }
    var mid = Math.floor((low + high) / 2);
    var left = mergeSort(A, low, mid);
    var right = mergeSort(A, mid + 1, high);
    var res = mergeTwoSortedArrays(left, right);
    return res;
}
var arr = [1, 26, 23, 94, 123, 765, 21, 567, 8, 3, 768, 23, 234, 89];
arr = mergeSort(arr, 0, arr.length - 1);
console.log(arr);
