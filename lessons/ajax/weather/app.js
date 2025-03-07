const cityInput = document.querySelector("input");
cityInput.addEventListener("keypress", (event) => {
    if(event.code === "Enter") {
        getWheatherData(event.target.value)
    }
});

function handleError(msg) {
    document.getElementById("weather-error").textContent = msg;
    document.getElementById("weather-city").textContent = "";
    document.getElementById("weather-temp").textContent = "";
    document.getElementById("weather-icon").src = "";
}

async function getWheatherData(city) {
    const key = "08fa1b19f2541e554b840b180814ad08";
    const weatherEndPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    
    try {
        const resp = await fetch(weatherEndPoint);
        const json = await resp.json();
        if (!resp.ok) {
            handleError(`Sth went wrong. Code: ${json.cod}. Message: ${json.message}.`);
            return;
        }

        document.getElementById("weather-error").textContent = "";
        document.getElementById("weather-city").textContent = city;
        document.getElementById("weather-temp").textContent = json.main.temp;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
    } catch(err) {
        handleError(err.message);
    }
}
