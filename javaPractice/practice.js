let pencilPrice = 20;
let eraserPrice = 10;
console.log("The Total Price is", pencilPrice + eraserPrice,"rupees");
console.log(`when we multiply both ${pencilPrice * eraserPrice}`)

// nested if else statement 
let marks = 80;
if(marks>=35){
    console.log("Student is passed");
    if(marks>=80){
        console.log("Student got O grade");
    }else{
        console.log("Student got A grade");
    }
}
else{
    console.log("student is failed");
}

// questions
let msg = "help!";
console.log(msg.trim().toUpperCase());



// array

let arr = ["january", "july", "march", "august"];
console.log(arr.splice(0,2,"july","june"));
console.log(arr);

// for loop
for(let i=1; i<=10; i++){
    console.log(i);
}

// favourote movie game

let fav_movie = "avatar";
let guess = prompt("guess the favourite movie");

if(fav_movie==guess){
    console.log("Congratulations you cracked it!!");
}else{
    prompt("OOps guess again");
}