import "./style.css";
import { fetchWeather, weatherInfo } from "./javascript/fetchWeather";
import { displayWeather, submitCity } from "./javascript/dom";




const searchBar = document.querySelector("#searchbar");
searchBar.addEventListener("keydown", (event) => {
    if (!event.repeated && event.key === "Enter") submitCity();
});

const searchButton = document.querySelector(".searchIcon");
searchButton.addEventListener("click", submitCity);


// Weather API key:f7d67f8366cd4923a8611905241704
// Giphy API key: 77i2VacDimvJPb9DMCGzqaRDxTeKlqvy