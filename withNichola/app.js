const title = document.querySelector("div.hello:first-child h1");

console.log(window.innerWidth);
title.textContent = "Hello!"
if(window.innerWidth === 500) document.body.style.backgroundColor = "cadetblue";
else if (window.innerWidth >500 && window.innerWidth <=1000 ) document.body.style.backgroundColor = "darkmagenta";
else  document.body.style.backgroundColor = "gold";

const superEventHandler = {

    handleResized: function (){
    console.log(window.innerWidth);
    if(window.innerWidth === 500) document.body.style.backgroundColor = "cadetblue";
    else if (window.innerWidth >500 && window.innerWidth <=1000 ) document.body.style.backgroundColor = "darkmagenta";
    else  document.body.style.backgroundColor = "gold";
}
};
window.addEventListener("resize", superEventHandler.handleResized);
document.getElementsByClassName("button");

