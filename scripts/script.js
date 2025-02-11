let petSalon={
    name: "The fashion pet",
    address:{
        street: "Palm ave",
        zip:"22100"
    }
}

let pet1={
    name:"Scooby",
    age:65,
    gendger:"Male"
}
let pet2={
    name:"Scooby",
    age:65,
    gendger:"Male"
}
let pet3={
    name:"Scooby",
    age:65,
    gendger:"Male"
}

let petList = [pet1, pet2, pet3];


document.getElementById("petsCounter").innerHTML = `We have ${petList.length} pets`;

function getPetName(){
    let list = document.getElementById("petNames");

    for(let i=0; i<petList.length; i++){
        console.log(petList[i].name);
        list.innerHTML+= `<li>${petList[i].name}</li>`
        
    }
}

getPetName();