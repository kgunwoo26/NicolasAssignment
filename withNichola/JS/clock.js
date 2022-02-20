const untilChristmas = document.querySelector("#christmasDate");
var christmas;
const today = new Date();

if(parseInt(today.getMonth()) >= 12 && parseInt(today.getDay()) >=25) {
    christmas = `Dec 25,${parseInt(today.getFullYear())+1}, 00:00:00`
}
else { 
    christmas = `Dec 25,${parseInt(today.getFullYear())}, 00:00:00`
}
const christmasDate = new Date(christmas);
const tomorrowDate = new Date();

function getDate(){
    const todayDate = new Date();
    untilChristmas.innerText = 
    `${Math.floor((christmasDate.getTime()-todayDate.getTime())/1000/24/60/60)}d`+ 
    ` ${String(23-todayDate.getHours()).padStart(2,"0")}h`+
    ` ${String(59-todayDate.getMinutes()).padStart(2,"0")}m`+
    ` ${String(59-todayDate.getSeconds()).padStart(2,"0")}s`;
}

setInterval(getDate,1000);


