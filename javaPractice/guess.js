let max = prompt("enter max number");

let random = Math.floor(Math.random()*max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("Quit the game");
        break;
    }if(guess==random){
        console.log("Congrats!! you guess is right");
        break;
    }else if(guess<random){
        guess = prompt("Hint : Your guess i small");
    }else if(guess>random){
        guess = prompt("Hint : Your guess i small");
}
}