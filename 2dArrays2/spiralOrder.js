//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let matrix = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(m);
            for(let j=0;j<m;j++)
            {
                a[j] =parseInt(input_line[i*m+j]);
            }
            matrix[i] = a;
        }
        
        let obj = new Solution();
        let ans = obj.spirallyTraverse(matrix, n, m);
        let s = "";
        for(let i = 0 ; i < ans.length ;i++)
        {
            s+=ans[i];
            s+=" ";   
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[][]} matrix
 * @param {number} r
 * @param {number} c
 * @returns {number[]}
*/
class Solution 
{
    //Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(arr, r, c){
        // code here
        let lw = 0;
        let rw = arr[0].length-1;
        let tw = 0;
        let bw = arr.length-1;
        
        let total = r*c;
        let res = [];
        while(total>0){
            //top wall
            for(let j = lw;j<=rw && total>0;j++){
                res.push(arr[tw][j]);
                total--;
            }
            tw++;
            
            //right wall
            for(let i = tw;i<=bw && total>0;i++){
                res.push(arr[i][rw]);
                total--;
            }
            rw--;
            //bottom wall
            for(let j = rw;j>=lw && total>0;j-- ){
                res.push(arr[bw][j]);
                total--;
            }
            bw--;
            
            //left  wall
            for(let i = bw;i>=tw && total>0;i--){
                res.push(arr[i][lw]);
                total--;
            }
            lw++;
        }
        return res;
    }
    
    
    
    
    
    
    
    
    
    
    
    
}