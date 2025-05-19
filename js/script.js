async function getWeatherData() {
    try {
        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером.");
            return;
        }

        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const http = 'https://api.openweathermap.org/data/2.5/weather';
        const appId = '5d4245e93cad973b9b7c81c4c110b348';
        const url = `${http}?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric&lang=ua`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();

        const timezoneOffset = weatherData.timezone;
        const date = new Date();
        const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
        const localTime = new Date(utcDate.getTime() + timezoneOffset * 1000);

        const options = {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(localTime);
        const dateStr = `${parts.find(p => p.type === 'month').value} ${parts.find(p => p.type === 'day').value}, ${parts.find(p => p.type === 'year').value} - ${parts.find(p => p.type === 'weekday').value}`;
        const timeStr = `${parts.find(p => p.type === 'hour').value}:${parts.find(p => p.type === 'minute').value} ${parts.find(p => p.type === 'dayPeriod').value}`;

        const temp = Math.round(weatherData.main.temp);
        const feelsLike = Math.round(weatherData.main.feels_like);
        const humidity = weatherData.main.humidity;
        const pressure = weatherData.main.pressure;
        const windSpeed = Math.round(weatherData.wind.speed * 3.6);
        const windDirection = weatherData.wind.deg;
        const description = weatherData.weather[0].description;
        const sunrise = new Date(weatherData.sys.sunrise * 1000);
        const sunset = new Date(weatherData.sys.sunset * 1000);
        const sunriseTime = sunrise.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const sunsetTime = sunset.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

        const windDir = degreesToDirection(windDirection);

        const iconCode = weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].icon : '01d';
        const iconElement = document.getElementById("weather-icon");
        if (iconElement) {
            iconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            console.log("Icon code:", weatherData.weather[0].icon);
        } else {
            console.error("Element with id 'weather-icon' not found");
        }

        document.getElementById("date").innerText = dateStr;
        document.getElementById("time").innerText = timeStr;
        document.getElementById("temp").innerText = `${temp}°C`;
        document.getElementById("feels-like").innerText = `Відчувається як: ${feelsLike}°C`;
        document.getElementById("description").innerText = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById("humidity").innerText = `Вологість: ${humidity}%`;
        document.getElementById("pressure").innerText = `Тиск: ${pressure} hPa`;
        document.getElementById("wind").innerText = `Вітер: ${windSpeed} km/h ${windDir}`;
        document.getElementById("sunrise").innerText = `Схід: ${sunriseTime}`;
        document.getElementById("sunset").innerText = `Захід: ${sunsetTime}`;
        document.getElementById("geoError").style.display = "none";
    } catch (error) {
        if (error.code === error.PERMISSION_DENIED) {
            document.getElementById("geoError").style.display = "block";
        } else {
            console.error("Ошибка:", error.message);
        }
    }
}

// Функция для преобразования градусов в направление ветра
function degreesToDirection(deg) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
}