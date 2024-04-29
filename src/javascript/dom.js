import { fetchWeather, setCity} from "./fetchWeather";

//Event Listeners

async function submitCity() {
    const searchBar = document.getElementById("searchbar");
  
    if (searchBar.value === "") return;
  
    const loadingOverlay = document.querySelector(".loading-overlay");
  
    try {
      loadingOverlay.classList.remove("invisible");
      await setCity(searchBar.value);
      searchBar.value = "";
    } catch (error) {
      alert(error.message);
      loadingOverlay.classList.add("invisible");
      return;
    }
  
    //updateLocation();
    //updateSidebar();
    //updateHourlyBar();
    //updateDailyBar();
    loadingOverlay.classList.add("invisible");
  }

function displayWeather(currentWeather) {
    const displayDiv = document.querySelector(".results");

    const cityName = document.createElement("p");
    cityName.textContent = currentWeather.cityName;
    displayDiv.appendChild(cityName);

    const cityTemp = document.createElement("p");
    cityTemp.textContent = currentWeather.mainWeather + "c";
    displayDiv.appendChild(cityTemp);

    const cityFeelsLike = document.createElement("p");
    cityFeelsLike.textContent = currentWeather.feelsLike;
    displayDiv.appendChild(cityFeelsLike);

    const cityRain = document.createElement("p");
    cityRain.textContent = currentWeather.rain;
    displayDiv.appendChild(cityRain);

    const cityHumidity = document.createElement("p");
    cityHumidity.textContent = currentWeather.humidity + "%";
    displayDiv.appendChild(cityHumidity);

    const cityWindKph = document.createElement("p");
    cityWindKph.textContent = currentWeather.windKph;
    displayDiv.appendChild(cityWindKph);

    const cityWindDir = document.createElement("p");
    cityWindDir.textContent = currentWeather.windDir;
    displayDiv.appendChild(cityWindDir);     
};

export { displayWeather, submitCity };

