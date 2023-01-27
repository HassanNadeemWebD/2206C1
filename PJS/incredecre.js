let i = 2;
// console.log(i++);  //0
// console.log(++i);
// console.log(--i);
// console.log(i++) //1      1+1
// console.log(i--); 
// console.log(i);



// let res = ++i + 3 + i-- + i++ + i-- + --i + i++ + i-- + i + ++i + i + --i 
//          3 + 3 +  3 +  2    + 3   + 1  +  1   + 2   + 1 + 2   + 2 +  1

// i + i + ++i + i++ - --i + ++i - ++i + i++ + i-- + i++ + i + --i + i + 5 + i++ + i
//  2 + 2  + 3  +  3  - 3   +  4   - 5  +  5  +  6  + 5   + 6 +  5   + 5 + 5 + 5   + 6         
// + i++ + --i + ++i + 10 + i + i++ + i++ - --i + ++i - ++i + i++ + i--;
// + 6   +  6  +  7 +  10 + 7  + 7  +  8   - 8  +  9  -  10  +  10  + 11 
// console.log(res);



// for (let i = 1; i <= 100; i++) {
//     document.write(i + " Uzair" + "<br>");

// }

let j;
let res = 0;
for (j = 1; j <= 100; j++) {


    res += j;   // j = j + j
    document.write(res + "<br>")
    // document.write(j + "<br>");


}

document.write(res)