const time=document.querySelector('.time')
const date=document.querySelector('.date')

function setTime(){
  setInterval(()=>{
    let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let timeToday=new Date();
    let date=timeToday.getDate()
    let month=timeToday.getUTCMonth()+1
    let year=timeToday.getUTCFullYear()
    date.innerHTML=`${date} ${months[month]},${year}`
    let sec=timeToday.getSeconds()
    sec = sec<10 ? '0'+sec : sec
    let min=timeToday.getMinutes()
    min = min<10 ? '0'+min : min
    let hour=timeToday.getHours()
    let denoter= hour>= 12 ? 'PM' : 'AM'
    hour=hour%12
    hour = hour<10 ? '0'+hour : hour
    time.innerHTML=`${hour} :${min}: ${sec}  ${denoter}`
  },1000)
}
setTime()