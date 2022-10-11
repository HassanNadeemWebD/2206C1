// let obj = {
//     name: "abc",
//     contact:"031523654",
//     gender:"Male"
// }


function MyObj(fullName , contact , gender){



this.fullname = fullName;
this.contact = contact;
this.gender=gender;

}


let ebad = new MyObj("Ebad" ,"03426558" , "Male");


console.log(ebad.contact)


console.log(new Date())
let daysArray =["Sunday" , "Mon" , "Tue", " Wed","Thurs" , "Fri", "Sat"]

let d = new Date();

console.log(d.getFullYear() +  " " + d.getHours() +":" + d.getMinutes())


console.log("Today is " +daysArray[d.getDay()] )
console.log("Current Month is " + d.getMonth())