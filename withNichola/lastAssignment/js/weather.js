const APIkey = '281bb02578869e2f7c6fc6a347eb2157'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
    fetch(url)
    .then(Response => Response.json())
    .then((data) => {
            const weatherOfcity = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        weatherOfcity.innerText= `${Math.floor(temp)}℃ ${weather}`;
        city.innerText = name;
    });
}

function onGeoError(){
    const city = document.querySelector("#weather span:last-child")
   city.innerText = "위치 정보를 불러올 수 없습니다"
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);