// api key:-a30352798bce11905af008391845b629

const apiKey='a30352798bce11905af008391845b629';
const apiURL='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric'

async function checkWeather(){
  const response =await fetch(apiURL)
}