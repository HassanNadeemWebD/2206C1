// console.log(document.getElementById("myheading").innerHTML = "Welcome" )
// console.log(document.querySelector("#myheading").innerHTML)

// function change(){

// let tag = document.querySelector('#myheading');

// tag.classList.toggle("blue")
// document.getElementById("modal").style.display = "block"
// document.querySelector(".btn").style.display = "none"


// }
// document.getElementById("myheading").style.textAlign = "center";
// console.log(document.querySelectorAll(".mypara") )

// console.log(document.getElementById("name"))
// function login(){

// document.write(document.getElementById("name").value)



// }
function login(){

let name = document.getElementById("name").value;
let email =document.getElementById("email").value
let password = document.getElementById("password").value;
document.write("Name: "+ name +"<br />" +"Email: "+ email +"<br />" +"Password: "+ password);
localStorage.setItem("Name" , name);
localStorage.setItem("Email" , email);
localStorage.setItem("Password" , password )
sessionStorage.setItem("Name" , name);
sessionStorage.setItem("Email" , email);
sessionStorage.setItem("Password" , password )



}
// localStorage.clear()


// document.getElementById("user").innerHTML= localStorage.getItem("Name")
function showPassword(){
  let passwordField =  document.getElementById("password");
//   console.log(passwordField)
//   passwordField.setAttribute("type" , "text");
if(passwordField.type === "password")
{

passwordField.type = "text"

}
else{

    passwordField.type = "password"

}





}



