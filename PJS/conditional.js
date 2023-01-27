let att = 9;
let name = "Areeb";

if (att >= 10) {
    console.log("welcome");
}
else if (name == "Ali") {
    console.log("Aaiye Janab Ap ka he intezar tha  ! ");


} else {


    console.log("Ta Ta");

}

let userInput = prompt("Enter Day Number");

switch (userInput) {
    case "1":

        console.log("Monday");
  
    case "2":

        console.log("Tuesday");
    
    case "3":

        console.log("Wednesday");
        break;
    case "4":

        console.log("Thursday");
        break;

    default:

        console.log("Invalid");
        break;
}
