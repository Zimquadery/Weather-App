import config from './config.js';

const form = document.getElementById("Form");
const city_Input = document.getElementById("City");
const card = document.getElementById("Weather_Card");
const City_Name = document.getElementById("City_Name");
const Country = document.getElementById("Country");
const Temperature = document.getElementById("Temperature");
const Description = document.getElementById("Description");
const Humidity = document.getElementById("Humidity");
const Wind_Speed = document.getElementById("Wind_Speed");
const Invalid = document.getElementById("Invalid");
const Weather_API_KEY = config.WEATHER_API_KEY;
const Geo_API_KEY = config.GEO_API_KEY;
let city;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  city = city_Input.value;
  if (city) {
    try {
      const data = await getWeather(city);
      displayWeather(data);
    } catch (error) {
      console.log(error);
      displayError();
    }
  } else {
    displayError();
  }
});

async function getcoordinates(city_name) {
  const URL = `https://api.geoapify.com/v1/geocode/search?text=${city_name}&limit=1&format=json&apiKey=${Geo_API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  if (data.results && data.results.length > 0) {
    return data;
  } else {
    throw new Error("City not found");
  }
}

async function getWeather(city_name) {
  const geodata = await getcoordinates(city_name);
  const lat = geodata.results[0].lat;
  const lon = geodata.results[0].lon;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}&units=metric`;
  const response = await fetch(URL);
  const data = await response.json();
  const ans = { ...data, ...geodata };
  console.log(ans);
  return ans;
}

function displayWeather(data) {
  City_Name.textContent = city.charAt(0).toUpperCase() + city.slice(1);
  Country.textContent = data.results[0].state || "N/A";
  Temperature.textContent = `${data.main.temp}°C`;
  Description.textContent = data.weather[0].description;
  Humidity.textContent = `Humidity : ${data.main.humidity}`;
  Wind_Speed.textContent = `Wind : ${data.wind.speed} km/h`;
  card.style.display = "block";
  Invalid.style.display = "none";
}

function displayError() {
  card.style.display = "none";
  Invalid.style.display = "block";
}
