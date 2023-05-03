function isAnagram(A: string, B: string): boolean {
    let freqA: number[] = new Array(26).fill(0);
    let freqB: number[] = new Array(26).fill(0);
    
    //fill the frequencies of A in freqA

    for(let i = 0;i<A.length;i++){
        let ascii: number = A.charCodeAt(i);
        let idx: number = ascii - 97;
        freqA[idx]++;
    }

    //fill the frequencies of B in freqB
    for(let i = 0;i<B.length;i++){
        let ascii: number = B.charCodeAt(i);
        let idx: number = ascii - 97;
        freqB[idx]++;
    }

    for(let i = 0;i<26;i++){
        if(freqA[i] != freqB[i]) return false;
    }
    return true;
};