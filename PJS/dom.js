// console.log(document.body);


// console.log(document.getElementsByTagName('h1')[1].innerHTML);
// console.log(document.getElementsByTagName('h1')[1].innerText );
// document.getElementsByTagName('h1')[0].innerText = "Good Morning !"

// console.log(document.getElementsByClassName('heading')[0].innerHTML);

// let title = document.getElementById("title") 

// console.log(title.style.backgroundColor = "yellow");

// console.log(document.querySelector("#title").innerHTML);
// console.log(document.querySelector('.heading'));
// console.log(title.innerText);




// Fat Arrow Function
let concat = () => {

    let firstName = document.getElementById("fname").value;
    let lastName = lname.value;
    let fullName = `${firstName}${lastName}`;
    let displayName = document.getElementById("fullname")

    displayName.innerText += " " + fullName;
    displayName.style.display = "block"


    // console.log(fullName);



}
document.getElementById("concatBtn").addEventListener("click", concat)

document.getElementById("style").addEventListener("click", () => {

    let displayName = document.getElementById("fullname");
    displayName.classList.toggle("fullname")



})

let changeTxt = () => {
    document.getElementById('title').innerHTML = "Double Click"

    console.log("Double Click");
    let displayName = document.getElementById("fullname");
    displayName.classList.toggle("fullname")


}


let keyUp = () => {

    alert(document.getElementById("confirmPass").value)



}

let keyDown = () => {

    alert(document.getElementById("confirmPass").value)



}

let keyPress = () => {

    alert(document.getElementById("confirmPass").value)



}
let onChange = () => {

    console.log(document.getElementById("pass").value)



}

let checkPass = () => {
    let pass = document.getElementById("pass");
    let confirmPass = document.getElementById("confirmPass");
    // console.log(pass);
    // console.log(confirmPass);
    if (pass.value == confirmPass.value) {


        pass.classList.remove("error")
        confirmPass.classList.remove("error")

        pass.classList.add("success")
        confirmPass.classList.add("success")




    } else {


        pass.classList.remove("success")
        confirmPass.classList.remove("success")
        pass.classList.add("error")
        confirmPass.classList.add("error")


    }

}

document.getElementById("hi").addEventListener("click", () => {

    document.getElementById("greet").innerHTML += "Hi!"


})
document.getElementById("calc").addEventListener("click", () => {

 

let webworker = new Worker("worker.js");

console.log(webworker);
webworker.postMessage("Start Work")

webworker.onmessage = (e)=>{

    console.log(e.data);

    document.getElementById("calculate").innerHTML =e.data


}



})






// console.log(); 
