const tDate = document.querySelector("#date h1");
const tTime = document.querySelector("#time");

function updateTime(){
    const nDate = new Date();
    const valueDate = [nDate.getFullYear() , 
        String(nDate.getMonth()+1).padStart(2,"0") , 
        String(nDate.getDate()).padStart(2,"0") ] //[ 년, 월, 일]

    const valueTime = [String(nDate.getHours()).padStart(2,"0") ,
     String(nDate.getMinutes()).padStart(2,"0") , 
     String(nDate.getSeconds()).padStart(2,"0")] // [ 시, 분, 초]

    tDate.innerText= `${valueDate[0]} / ${valueDate[1]} / ${valueDate[2]}`;
    tTime.innerText = `${valueTime[0]} : ${valueTime[1]} : ${valueTime[2]}`
}

setInterval(updateTime, 1000);