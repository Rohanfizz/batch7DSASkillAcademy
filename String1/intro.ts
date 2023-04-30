let s: string = "abcd";
let sarray: string[] = s.split("");
sarray[1] = 'x';
s = sarray.join('');
console.log(s.length);
