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


// console.log(); 
