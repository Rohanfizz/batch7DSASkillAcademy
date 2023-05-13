function mergeTwoSortedArrays(A: number[], B: number[]): number[] {
    let C: number[] = [];
    let i: number = 0;
    let j: number = 0;

    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            C.push(A[i]);
            i++;
        } else {
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


function mergeSort(A:number[] , low:number,high:number) : number[]{
    if(low == high){
        //there is only one element
        //array of one  element is always sorted
        let res:number[] = [];
        res.push(A[low]);
        return res;
    }

    let mid:number = Math.floor((low+high)/2);
    let left :number[] = mergeSort(A,low,mid);
    let right:number[] = mergeSort(A,mid+1,high);

    let res = mergeTwoSortedArrays(left,right);
    return res;
}

let arr = [1,26,23,94,123,765,21,567,8,3,768,23,234,89];
arr = mergeSort(arr,0,arr.length-1);
console.log(arr);