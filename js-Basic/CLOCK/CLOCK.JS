setInterval(setClock,1000)  //CALLS A FUNCTION EVERY TIME IN INTERVAL OF GIVEN TIME 
const hourHand=document.querySelector(`[data-hour-hand]`)
const minuteHand=document.querySelector(`[data-minute-hand]`)
const secondHand=document.querySelector(`[data-second-hand]`)

function setClock(){
  const currentDate=new Date()
  const secondsRatio = currentDate.getSeconds()/60
  const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
  const hoursRatio = (minutesRatio + currentDate.getHours())/12
  setRotation(hourHand,hoursRatio)
  setRotation(minuteHand,minutesRatio)
  setRotation(secondHand,secondsRatio)
}
function setRotation(element,rotationRatio){
 element.style.setProperty('--rotation',rotationRatio*360)
}
setClock()