const startStopBtn=document.querySelector('#startStopBtn')
const resetBtn=document.querySelector('#resetBtn')
const timer=document.querySelector('.timer')

let seconds=0;
let minutes=0;
let hours=0;

let btnStatus="stoped";
let TimerInterval=null;


function stopWatch(){
  seconds++
  if(seconds/60===1){
    seconds=0;
    minutes++;
  }
  if(minutes/60===1){
    minutes=0;
    hours++;
  }
  let zeroSeconds=0;
  let zeroMinutes=0;
  let zeroHours=0;
  if(seconds<10){
    zeroSeconds="0"+seconds.toString();
  }else{
    zeroSeconds=seconds;
  }
  if(minutes<10){
    zeroMinutes="0"+minutes.toString();
  }else{
    zeroMinutes=minutes;
  }
  if(hours<10){
    zeroHours="0"+hours.toString();
  }else{
    zeroHours=hours;
  }
  timer.innerText= zeroHours + ":" + zeroMinutes + ":"+ zeroSeconds;
}
startStopBtn.addEventListener('click',()=>{
  if(btnStatus==='stoped'){
    TimerInterval= window.setInterval(stopWatch,1000) 
    startStopBtn.innerHTML=`<i class="fa-solid fa-pause" id="pause">`
    btnStatus="playing"
  }else{
    window.clearInterval(TimerInterval)
    startStopBtn.innerHTML=`<i class="fa-solid fa-play" id="play">`
    btnStatus='stoped'
  }
})


resetBtn.addEventListener('click',()=>{
  window.clearInterval(TimerInterval)
  startStopBtn.innerHTML=`<i class="fa-solid fa-play" id="play">`
  btnStatus="stoped"
  seconds=0;
  minutes=0;
  hours=0;
  timer.innerText="00:00:00"

})
