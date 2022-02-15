
const range = document.querySelector("#range");
const guess = document.querySelector("#guess");
const play = document.querySelector("#play");
const blank = document.querySelector("#blank");
const result = document.querySelector("#result");
const insertValue = document.querySelector("#insertValue");

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
play.addEventListener("click",LetsPlay);

