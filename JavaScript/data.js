let arr = [1, 3, 5, 6, 8, "apple", true, "Nawaz"];
console.log(arr);
console.log(arr[5])
console.log(arr.length)
console.log(arr.indexOf("Nawaz"))
// let userInput = prompt("Enter Any Name/Number")
arr.push("Babar Azam")
// arr.push(userInput)
console.log(arr)
arr.pop();
// arr.pop();
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift("Abc")
console.log(arr)

arr.unshift("2206C1")
console.log(arr)

arr.shift()
arr.shift()
arr.shift()
console.log(arr)




let obj = {
    name: "Abc",
    // fatherName: prompt("Enter Your Father Name") ,
    contact: "034585632",
    result: true,
    fee: 4500,
    fruits: ["Apple", "mango", "Grapes", " Pineapple"],
    Bio: {
        fatherName: "def",
        password: "3535",
        hobbies: ["cricket", "Football", "Study"]


    }

};

console.log(obj.result)

// console.log(obj)
console.log(obj.fruits[2])
console.log(obj.Bio.hobbies[1])
console.log(obj)
document.write(obj)
document.write(obj.Bio.hobbies[1])

let myJSON = JSON.stringify(obj);
// let htmlElem = document.getElementById('json').innerHTML =myJSON ;
// htmlElem = myJSON
// console.log(htmlElem)


document.write(myJSON);
console.log(myJSON);
console.log(JSON.parse(myJSON));
document.write(JSON.parse(myJSON))


