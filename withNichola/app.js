
const range = document.querySelector("#range");
const guess = document.querySelector("#guess");
const play = document.querySelector("#play");
const blank = document.querySelector("#blank");
const result = document.querySelector("#result");
const insertValue = document.querySelector("#insertValue");

function handleEnterNum(event){
    event.preventDefault();
    console.log("!!!");
    console.log(Entered.value);
}
function UpdateRange(){
    console.log(range.value);
    const valueRange = range.value;
}   

function UpdateGuess(){
    console.log(guess.value);
    const valueGuess = guess.value;
}   

function LetsPlay(){
    if(guess.value ==="" || range.value ==="") blank.classList.remove("hidden");
    else {
        const randomNum = Math.floor(Math.random() * (parseInt(range.value) + 1));
        if(range.value ===0) randomNum-=1;

        blank.classList.add("hidden");
        insertValue.innerText = `You chose: ${guess.value} , the machine chose: ${randomNum}.`
        if(randomNum === parseInt(guess.value)) {
            result.innerText = "You won!";
        }
        else {
            result.innerText = "You lost!";
        } 
    }
}
range.addEventListener("input",event=>UpdateRange(range));
guess.addEventListener("input",event=>UpdateGuess(guess));
play.addEventListener("click",LetsPlay);

