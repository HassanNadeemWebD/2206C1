// let age = prompt("Enter your age")

// if ( age >= 18 ){
//     document.write("You can Drive");
// }
// else{
//     document.write("You cannot Drive");



// }



// let marksObtained = prompt("Enter your Obtained Marks");
// let totalMarks =  prompt("Enter your Total Marks") ; 
// let perc = (marksObtained/totalMarks)*100;

// document.write( "Your % \n Hassan" +parseInt(perc) + "\n");

// console.log( "Your % \n Hassan" +"\n"+parseInt(perc));


// if (perc >= 80) {

//     document.write("A-One")


// }
// else if (perc >= 70) {
//     document.write("A")



// }
// else if (perc >= 60) {
//     document.write("B")



// }
// else {
//     document.write("Fail")
// }


// console.log(true && false);
// console.log(true && true);
// console.log(false || true);
// console.log( !(true && false));
// console.log(!(true))

let userInput = prompt("Enter a vowel");
if (userInput.length == 1) {
    if (userInput == 'a' || userInput == 'e' || userInput == 'i' || userInput == 'o' || userInput == 'u') {
        document.write(userInput + " " + "is vowel")
    }
    else {
        document.write(userInput + " " + "is not a vowel")
        
        

    }



}
else {

    document.write("Please Enter 1 Character Only")
    document.write(" \t"+ userInput + "\t " + "having" +" " + userInput.length + " characters")
    console.log(" \t"+ userInput + "\t " + "having" +"\n " + userInput.length + " characters")

}