onmessage = (e) => {
    console.log(e);
    console.log(e.data);

   let res = 0
    for (let i = 1; i <= 10000000000; i++) {
// console.log(i);
        res += i;

    }



    postMessage(res)




}