const searchBarInput=document.querySelector('#searchBarInput')
const date=document.querySelector('#date')
const city=document.querySelector('#city')
const tempImage=document.querySelector('#tempImage')
const description=document.querySelector('#description')
const temp=document.querySelector('#temp')
const tempMax=document.querySelector('#tempMax')
const tempMin=document.querySelector('#tempMin')
const searchIcon=document.querySelector('#searchIcon')
const monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let  dateObj=new Date();
console.log(dateObj)
let  month=monthArray[dateObj.getMonth()]
let day=dateObj.getDate()
console.log(day)
let year =dateObj.getFullYear();
date.innerHTML=(`${month} ${day} , ${year}`).toUpperCase()

const getWeather=async ()=>{
  try{
   const cityName=searchBarInput.value;
    const fetchWeatherData=await fetch(  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=154ce9c4290971119d1e19bac1a4e4ad&units=metric`,
      {
        headeers:{
          Accept:"application/json"
        }    
      })
      const WeatherData=await fetchWeatherData.json()
      console.log(WeatherData)
      tempMin.innerHTML=`<h2>${WeatherData.main.temp_min}*C</>`
      tempMax.innerHTML=`<h2>${WeatherData.main.temp_max}*C</>`
      description.innerHTML=`<h4>${(WeatherData.weather[0].description).toUpperCase()}</h4>`
      temp.innerHTML=`<h2>${WeatherData.main.temp}*C</>`
      tempImage.innerHTML=`<img src="http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png"/>`
      tempImage.style.paddingLeft='380px'
      city.innerHTML=`${WeatherData.name}`
  }catch(error){
    console.log(error)
  }
}
searchIcon.addEventListener('click',getWeather)




