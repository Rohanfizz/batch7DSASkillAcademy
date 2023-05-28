function nextLargerElement(arr, n){
    // code here
    let st = [];
    let ans = [];
    
    for(let i = 0;i<n;i++){
        while(st.length > 0 && st[st.length-1] <= arr[i]){
            st.pop();
        }
        
        if(st.length == 0){
            ans[i] = -1;
        }else{
            ans[i] = st[st.length-1];
        }
        
        st.push(arr[i]);
    }
    return ans;
}

function nextSmallerElementLeft(arr, n){
    // code here
    let st = [];
    let ans = [];
    
    for(let i = 0;i<n;i++){
        while(st.length > 0 && st[st.length-1] >= arr[i]){
            st.pop();
        }
        
        if(st.length == 0){
            ans[i] = -1;
        }else{
            ans[i] = st[st.length-1];
        }
        
        st.push(arr[i]);
    }
    return ans;
}