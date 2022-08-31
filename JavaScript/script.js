// let age = prompt("Enter your age")

// if ( age >= 18 ){
//     document.write("You can Drive");
// }
// else{
//     document.write("You cannot Drive");



// }



let marksObtained = prompt("Enter your Obtained Marks");
let totalMarks =  prompt("Enter your Total Marks") ; 
let perc = (marksObtained/totalMarks)*100;

document.write( "Your % \n" +Math.round(perc) + "\n");
if (perc >= 80) {

    document.write("A-One")


}
else if (perc >= 70) {
    document.write("A")



}
else if (perc >= 60) {
    document.write("B")



}
else {
    document.write("Fail")
}


console.log(true && false);
console.log(true && true);
console.log(false || true);
console.log( !(true && false));
console.log(!(true))