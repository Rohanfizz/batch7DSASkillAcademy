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
var A = [1, 3, 5, 7, 9];
var B = [2, 4, 6, 8, 10, 12, 13, 14, 15, 16];
var C = mergeTwoSortedArrays(A, B);
console.log(C);
