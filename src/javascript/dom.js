import { fetchWeather, setCity} from "./fetchWeather";


const toggle = document.querySelector(".toggle");
let tempunit = "c";


//toggle tempunit - c or f 

toggle.addEventListener("click", () => {
    if (tempunit === "c") {
        tempunit = "f";
    } else {
        tempunit = "c";
    }
});


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

    clearDOM();

    const cityName = document.createElement("p");
    cityName.textContent = currentWeather.cityName;
    displayDiv.appendChild(cityName);
   
    const cityTemp = document.createElement("p");
    const cityFeelsLike = document.createElement("p");
    if (tempunit === "c") {
        cityTemp.textContent = currentWeather.mainWeather + " c";
        cityFeelsLike.textContent = currentWeather.feelsLike + " c";
    } else {
        cityTemp.textContent = currentWeather.mainWeatherF + " f";
        cityFeelsLike.textContent = currentWeather.feelsLikeF + " f";
   } 
    displayDiv.appendChild(cityTemp);
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

function clearDOM() {
    const nodeList = document.querySelectorAll("p");
    if (nodeList !== null) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].remove();
        }
    }
}

export { displayWeather, submitCity, clearDOM };

