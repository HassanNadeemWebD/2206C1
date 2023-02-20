// let myname =  prompt("Enter Your Name");


// document.write("Your name is " + myname )

// document.write(`Your name is ${myname}`)

// let obj = {
//     myName: "Hassan",
//     contact: "0345689",
//     func: function abc(name) {

//         document.write("Hello " + name);


//     }


// }
// console.log("Hassan")

// obj.func(myname);


// document.write("Good Afternoon !".length) ;
// document.write(Math.sin(120))
// document.write(Math.pow(16 , 3))

// let add = (x, y) => {

//     // document.write(x + y); 
//     sum = x + y;
//     // return x + y;
//     return [sum,2,1];
//     // return 1;
// }

// let num1 =parseInt(prompt("Enter 1st Number")) ;
// let num2 = parseInt(prompt("Enter 2nd Number")) ;
// parseInt(num1)

// document.write(typeof num1);

// let ans = add(50, 1000);
// console.log(ans)
// console.log(ans)
// console.log(ans)

// let res = add(55, 65);
// console.log(res);
// console.log(res);
// console.log(res);
// console.log(res);

/* Q1: Write a program that takes a positive integer from user &
display the following in your browser.
 a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number  */


// let userInput = prompt("Enter any Positive Number");



// if (userInput > 0) {

//     console.log(userInput);
//     console.log("Round value" + Math.round(userInput));
//     console.log("Floor value" + Math.floor(userInput));
//     console.log("ceil value" + Math.ceil(userInput));

// } else {



//     console.log("please enter postive number ");

// }



/* Q2: Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */


// let num1 = parseInt(prompt("Number 1"))
// let num2 = parseInt(prompt("Number 2"))
// let op = prompt("operation")

// let myFunc = (num1, num2, op) => {


//     switch (op) {
//         case "+":
//             console.log("Addition " + (num1 + num2));
//             break;

//         case "-":
//             console.log("Subtraction " + (num1 - num2));
//             break;
//         case "*":
//             console.log("Multiplication " + (num1 * num2));
//             break;

//         default:
//             console.log("invalid");
//             break;
//     }





// }

// myFunc(num1, num2, op)

let obj = {
    name: "Hassan",
    gender: "Male",
    contact: "03426545698"



}

// console.log(obj);
function Sports(indoor1, indoor2, indoor3, outdoor1, outdoor2, outdoor3) {

    this.indoor = [indoor1, indoor2, indoor3],
        this.outdoor = [outdoor1, outdoor2, outdoor3]



}


function ConstructObj(Name, gender, contact, hobbie1, hobbie2, hobbie3, indoor1, indoor2, indoor3, outdoor1, outdoor2, outdoor3) {

    this.Name = Name,
        this.gender = gender,
        this.contact = contact,
        this.hobbies = [hobbie1, hobbie2, hobbie3],
        this.sports = new Sports(indoor1, indoor2, indoor3, outdoor1, outdoor2, outdoor3)







}

let objZain =
    new ConstructObj("Zain", "Male", "0312654454", "cricket", "football", "facebook", "ludo", "carrom", "squash", "Hockey", "hathi ke sundh", "brf pani");

// console.log(objZain);
let objUzair =
    new ConstructObj("Uzair", "Male", "0312654896", "cricket", "football", "facebook", "ludo", "carrom", "squash", "Hockey", "hathi ke sundh", "brf pani")

console.log(objUzair);


let newObj = {


    add: (x, y) => {

        // document.write(x + y); 
        sum = x + y;
        // return x + y;
        return sum;
        // return 1;
    }

}


let res = newObj.add(2, 5);
console.log(res);

console.log(Math.abs(-55));
console.log(Math.trunc(Math.random()));


// setTimeout(() => {

//     console.log("Hello !");







// }, 2000)



let add = (a, b,) => {

    let sum = a + b;
    console.log(sum);
    // showAddition(sum)


}

// function showAddition(x) {

//     console.log(x);
// }

// add(65, 1, showAddition);
// add(65, 1, showAddition);
// setInterval(add(65, 1) , 3000)

//  setTimeout(add(65, 1),3000)
// setTimeout(alert("Hello !"),5000)

let welcome = () => {

    let username = prompt("Enter Your Name");
    console.log("Welcome " + username);

}

setInterval(() => {

    // add(56,60)


    welcome()




}, 2000)






