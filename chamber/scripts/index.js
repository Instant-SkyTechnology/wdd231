document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    const modified = document.getElementById("lastModified");

    const navButton = document.querySelector('#nav-button');
    const navBar = document.querySelector('#nav-bar');

    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');
        navBar.classList.toggle('show');
    });

    year.textContent = new Date().getFullYear();
    modified.textContent = document.lastModified;

    // SELECT HTML ELEMENTS IN THE DOCUMENT
    const myTown = document.querySelector('#town');
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const myDescription = document.querySelector('#description');
    const highTemp = document.querySelector('#high-temp');
    const lowTemp = document.querySelector('#low-temp');
    const humidity = document.querySelector('#humidity');
    const sunriseTime = document.querySelector('#sunrise');
    const sunsetTime = document.querySelector('#sunset');
    // const captionDesc = document.querySelector('figcaption');
    const forecastContainer = document.querySelector('#forecast-container');
    // CREATE REQUIRED VARIABLES FOR THE URL
    const myKey = "56edcb845dab93e7e886ee7d7b38aee5";
    const myLat = "43.76315701698374";
    const myLon = "-79.4242287044823";


    // WEATHER + FORECAST URLs
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;

    // FETCH CURRENT WEATHER
    async function getWeather() {
        try {
            const response = await fetch(currentWeatherURL);
            if (response.ok) {
                const data = await response.json();
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    // FETCH FORECAST
    async function getForecast() {
        try {
            const response = await fetch(forecastURL);
            if (response.ok) {
                const data = await response.json();
                displayForecast(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    // DISPLAY CURRENT WEATHER
    function displayResults(data) {
        myTown.innerHTML = data.name;
        myDescription.innerHTML = data.weather[0].description;
        currentTemp.innerHTML = `<strong>${data.main.temp}&deg;</strong> C`;

        // const desc = data.weather[0].description;
        // captionDesc.textContent = desc;

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', data.weather[0].description);

        highTemp.innerHTML = `High: ${data.main.temp_max.toFixed(1)}&deg;C`;
        lowTemp.innerHTML = `Low: ${data.main.temp_min.toFixed(1)}&deg;C`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

        const sunriseDate = new Date(data.sys.sunrise * 1000);
        const sunsetDate = new Date(data.sys.sunset * 1000);
        const options = { hour: '2-digit', minute: '2-digit' };

        sunriseTime.innerHTML = `Sunrise: ${sunriseDate.toLocaleTimeString([], options)}`;
        sunsetTime.innerHTML = `Sunset: ${sunsetDate.toLocaleTimeString([], options)}`;
    }

    // DISPLAY 3-DAY FORECAST (no icons)
    function displayForecast(data) {
        forecastContainer.innerHTML = ""; // clear old forecast

        // Pick data roughly for noon each day
        const forecastByDay = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        const nextThreeDays = forecastByDay.slice(0, 3);

        nextThreeDays.forEach((day, index) => {
            const date = new Date(day.dt * 1000);
            const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
            const desc = day.weather[0].description;
            const temp = `${day.main.temp.toFixed(1)}°C`;

            // Label first entry as "Today"
            const label = index === 0 ? "Today" : weekday;

            const line = document.createElement("p");
            line.classList.add("forecast-line");
            line.innerHTML = `${label}: <strong>${temp}</strong>`;
            forecastContainer.appendChild(line);
        });
    }

    // START
    getWeather();
    getForecast();

});

