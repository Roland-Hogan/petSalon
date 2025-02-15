//constructor
function Service(title,price){
    this.title=title;
    this.price=price;
}

function validService(service){
    let isValidTitle = true;
    let  isValidPrice = true;

    if(service.title==""){
        isValidTitle=false;
        $("#txtTitle").css("border","1px solid red");
        $("#titleRequirementText").show().css("color","red")       
}else{
    $("#txtTitle").css("border","1px solid black");
    $("#titleRequirementText").hide()  

}
    if(service.price==""){
        isValidPrice=false;
        $("#txtPrice").css("border","1px solid red");
        $("#priceeRequirementText").show().css("color","red")       
}else{
    $("#txtPricee").css("border","1px solid black");
    $("#priceRequirementText").hide()
}


    return isValidPrice && isValidTitle;

}

function register(){
    // get the values from the inputs
    let inputTitle = $("#txtTitle").val();
    let inputPrice = $("#txtPrice").val();
    
    let newService = new Service(inputTitle, inputPrice);
    if(validService(newService)==true){
        console.log("My service is valid");
        saveService(newService);//fn in SM
    }
    ///$("#results").append(`<li>${inputPrice,inputTitle}</li>`)
    }


function init(){
       //event handler
       $("#btnRegister").on("click",register);
       // ...on("click"...)
    
    //hide()
    $("#titleRequirementText").hide();
    $("#priceRequirementText").hide();
}
    


window.onload=init;