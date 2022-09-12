// function myfunc(name){
//     console.log("Hello From myfunc " + name )
//     console.log("Hiiii")
// }
// let userInput = prompt("Enter Your Name");

// let a = myfunc(userInput);
// console.log(a)

// myfunc()
// myfunc()
// myfunc()

// function add(a, b) {
//     // console.log(a+b)
//     return a + b;
// }

// let addition = add(2, 3);
// console.log(addition)
// console.log(addition)
// console.log(addition)

// // add(2,3)

// let huzaifa = {

//     hello: function abc() {

//         document.write("Hello World ! Huzaifa Here")
//     }
// };

// huzaifa.hello();



function huzaifa() {
    document.getElementById("myHeading").innerHTML = "Muhammad Huzaifa";
}
// huzaifa()

// program to find the factorial of a number

// take input from the user

const number = parseInt(prompt('Enter a positive integer: '));


// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
    // console.log("The factorial of " + number + "is 1")
    // console.log(`The factoral of ${number} is 1`)
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}