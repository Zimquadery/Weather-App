# Weather App

This is a simple Weather App that allows users to search for the current weather conditions of a city. The app fetches weather data from the OpenWeatherMap API and displays it to the user.

### Files

- **config.js**: Contains API keys for the weather and geolocation services.
- **index.html**: The main HTML file that structures the web page.
- **script.js**: The JavaScript file that handles the logic for fetching and displaying weather data.
- **style.css**: The CSS file that styles the web page.

## How to Use

1. Open `index.html` in a web browser.
2. Enter the name of a city in the input field.
3. Click the "Search" button.
4. The app will display the current weather conditions for the specified city.

## APIs Used

- **Geoapify Geocoding API**: Used to get the coordinates (latitude and longitude) of the city.
- **OpenWeatherMap API**: Used to get the current weather data for the specified coordinates.

## Configuration

The API keys are stored in the `config.js` file. Replace the placeholder keys with your own API keys:

```js
const config = {
  WEATHER_API_KEY: "your_openweathermap_api_key",
  GEO_API_KEY: "your_geoapify_api_key"
};

export default config;
