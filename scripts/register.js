let petList=[];// empty arry

let petSalon={
    name:"The fashion pet",
    address:{
        street:"Palm ave",
        zip:"22100"
    }
}


// getting HTML elements
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");
let inputType=document.getElementById("txtType");


//constructor
//name, age, gender, breed
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

function register(){
// get the values from inputs

// create obj using constructor
let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputType.value);

console.log(newPet);
//push the obj into the arry
if(isValid(newPet)){
    petList.push(newPet);
    displayTable();
    clearInputs();
    displayPetsInfo();
}

}

//Validations
function isValid(pet){
    let validation = true;

    //reset the style
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputService.classList.remove("error");
    document.getElementById("alert-error").classList.add("hide");


    if(pet.name === ""){
        validation = false;
        inputName.classList.add("error");
    }
    if(pet.age === ""){
        validation = false;
        inputAge.classList.add("error");
    }
    if(pet.service === ""){
        validation = false;
        inputService.classList.add("error");
    }

    return validation;
}
function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
}
function deletePet(petID){

    //remove from html
    document.getElementById(petID).remove();

    // remove fromthe array splice()
    petList.splice(petID,1);

    ///re-display the table
    displayTable();
    displayPetsInfo();
}

function showAlert(msg,type){
    let alertContainer = document.getElementById("alertContainer");

    alertContainer.innerHTML=`
        <div class="alert-error class=" alert alert-${type}" role="alert">
         ${msg}
        </div>`
}

function init(){

    //create three pets

    let pet1 = new Pet("Scooby",5,"male","Great Dane", "Bathing", "Dog");
    let pet2 = new Pet("Jersey",1,"Male","German Shepard","Bathing", "Dog" );
    let pet3 = new Pet("Nebula",3,"Female","Husky", "Bathing", "Dog" );
    // push the oets into the array

    petList.push(pet1,pet2,pet3);
    displayTable();
    displayPetsInfo();

    document.getElementById("alert-error").classList.add("hide");
}

window.onload=init;