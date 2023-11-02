
const apikey = "363ec6bd5b4d2da0100d3b7b5565e9a2";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".Btn");
const wthricn = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
      const response = await fetch(apiurl + city + `&appid=${apikey}`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
  
      console.log(data);
  
      document.querySelector(".city").innerText = data.name;
      document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerText = data.main.humidity + "%";
      document.querySelector(".wind").innerText = data.wind.speed + "km/h";
  
      if (data.weather[0].main === "Clear") {
        wthricn.src = "clear.png";
      } else if (data.weather[0].main === "Clouds") {
        wthricn.src = "clouds.png";
      } else if (data.weather[0].main === "Rain") {
        wthricn.src = "rain.png";
      } else if (data.weather[0].main === "Snow") {
        wthricn.src = "snow.png";
      } else if (data.weather[0].main === "Drizzle") {
        wthricn.src = "drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        wthricn.src = "mist.png";
      } else if (data.weather[0].main === "Sunny") {
        wthricn.src = "sunny.png";
      }
  
      document.querySelector(".weather").style.display = "block";
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  

// checkWeather("YourDefaultCityName");

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
