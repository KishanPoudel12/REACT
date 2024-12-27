const timer=document.querySelector('.timer')
const startStopBtn=document.querySelector('#startStopBtn')
const resetBtn=document.querySelector('#resetBtn')

let seconds =0;
let minutes=0;
let hours=0;

function playTime(){
  seconds++
  if(seconds<60){
    seconds=seconds
  }else{
    seconds=0;
    minutes++
  }
  if(minutes<60){
    minutes=minutes
  }else{
    minutes=0
    hours++
  }
  let zeroSeconds='0'+seconds.toString()
  let zeroMinutes='0'+minutes.toString()
  let zeroHours='0'+hours.toString()
  console.log(hours+ ":"+minutes+":"+seconds)
  if(seconds<10){
    seconds=zeroSeconds
  }else{
    zeroSeconds=seconds
  }
  if(minutes<10){
    zeroMinutes=zeroMinutes
  }else{
    zeroMinutes=minutes
  }
  if(hours<10){
    zeroHours=zeroHours
  }else{
    zeroHours=hours
  }
  timer.innerHTML=`${zeroHours}:${zeroMinutes}:${zeroSeconds}`
}

let timerStatus=false;
let timerInterval=null;

startStopBtn.addEventListener('click',()=>{
  if(!timerStatus){
    timerInterval=setInterval(playTime,1000)
    timerStatus=true
  }else{
    timerInterval=clearInterval(timerInterval)
    timerStatus=false
  }
})
resetBtn.addEventListener('click',()=>{
  clearInterval(timerInterval)
  timerStatus=false
   seconds =0;
   minutes=0;
   hours=0;
   timer.innerHTML=`00:00:00`
})