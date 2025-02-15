console.log("Welcome to Jquery");

//JS vs jQuery (getting elements)
// byId
let htmlElement = document.getElementById("results");
htmlElement=$("#results");
console.log(htmlElement);

//byTagName
let htmlElements2 = document.getElementsByTagName("p");
htmlElements2 = $("p");
console.log(htmlElements2);

//byClassName
let htmlElements3 = document.getElementsByClassName("bg-tomatoe");
htmlElements3 = $(".bg-tomatoe");
console.log(htmlElements3);


// ID selector

let redParagraph  = $("#red").css("background", "red").css("color", "white")
console.log("my red paragraph", redParagraph);

let blueParagraph  = $("#blue").css("background", "blue").css("color", "orange")
console.log("my blue paragraph", blueParagraph);
// Class selector

let paragraphWithBorder = $(".with-border");
paragraphWithBorder.css("border","2px solid black");

paragraphWithBorder.on("click",function(){
    console.log("Clicked");
    $(".with-border").addClass("bg-gray");
})
// Tag selector
let paragraphs = $("p");
paragraphs.css("cursor","pointer");

// Simple and common function
function register(){
    let testEntry = $("#testInput").val();// get and store value
    $("#results").append(`<li>${testEntry}</li>`)
}

//Events
$("#btnRegister").on("click",register);

//simple and common function
function clickMe(){
    console.log("click me");
    $("p:first").hide();
    $("p").css("border","3px solid black");
    }


    $("btnNew").on("click",clickMe);




