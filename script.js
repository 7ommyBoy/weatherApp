const getWeatherData = (city) => {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '912a9c9254msha7da2d8700c9dbbp1c3a90jsn1fa5e0a6a34b',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
    .then(response => response.json())
    .then(data => (data))
    .catch(err => console.error(err));
}


 // Retrieve city input and get the weather data

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)

}
// Show the weather data in HTML

const showWeatherData = (weatherData) => {

  console.log(weatherData, 'cookie')
  console.log(weatherData.current_observation.condition.temperature)
  document.getElementById('temp').innerText = weatherData.current_observation.condition.temperature
  document.getElementById('city-name').innerText = weatherData.location.city
  document.getElementById('weather-type').innerText = weatherData.current_observation.condition.text
  document.getElementById('humidity').innerText = weatherData.current_observation.atmosphere.humidity
  document.getElementById('wind-speed').innerText = weatherData.current_observation.wind.speed

}

