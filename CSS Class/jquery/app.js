
$(document).ready(function () {

    $(".btn").click(function () {
        // if (document.querySelector(".btn").innerHTML == "Show") {
        //     document.querySelector(".btn").innerHTML = "Hide"
        //     $(".btn").addClass('bg-primary')

        // } else {
        //     document.querySelector(".btn").innerHTML = "Show"
        //     $(".btn").addClass('bg-warning')

        // }

        // $(".btn").addClass('bg-danger')

        // $("p").toggle()


// $("p").fadeOut();
// $("p").fadeIn(3000);
$("p").fadeToggle(3000 , function (){
    // alert("FadeToggle")
    $("p").addClass('text-danger');
});


    })




})