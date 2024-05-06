import { displayWeather, submitCity } from "./dom.js";

const apiKey = "f7d67f8366cd4923a8611905241704";
let weatherData = {};

const fetchWeather = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const weatherData = await fetch(url, {mode: 'cors' });

    if(!weatherData.ok) {
        throw new Error(
            `Failed to fetch weather data. Status Code: ${weatherData.status}`
        );
    }
    const weatherDataJson = await weatherData.json();

    const currentWeather = {
    cityName: weatherDataJson.location.name,
    country: weatherDataJson.location.country,
    mainWeather: weatherDataJson.current.temp_c,
    mainWeatherF: weatherDataJson.current.temp_f,
    feelsLike: weatherDataJson.current.feelslike_c,
    feelsLikeF: weatherDataJson.current.feelslike_f,
    rain: weatherDataJson.current.precip_mm,
    humidity: weatherDataJson.current.humidity,
    windKph: weatherDataJson.current.wind_kph,
    windDir: weatherDataJson.current.wind_dir,
    gifSearch: weatherDataJson.current.condition.text
    };

    console.log(weatherDataJson);
    console.log(currentWeather);
    displayWeather(currentWeather);

};

async function setCity(city) {
    let lastCity = weatherData.city;

    await fetchWeather(city)
        .then(() => {
            weatherData.city = city
        })
        .catch((error) => {
            fetchWeather(city);
            weatherData.city = lastCity;

            if (error.code === 1006) {
                alert("Invalid location. Please try again!")
            }
        });
}

export { fetchWeather, setCity}

