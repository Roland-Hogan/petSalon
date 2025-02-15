function saveService(service){
    let data = read(); // [] or data
    data.push(service);// add the new service to the arry
    let val = JSON.stringify(data);
    localStorage.setItem("services",val);
}

function read(){
    let list=localStorage.getItem("services");
    console.log(list);
    if(!list){ //Not list?
        return []; // create an empty array
    }else{
        let data = JSON.parse(list);// convert the string into array
        return data; // return the data
    }
}