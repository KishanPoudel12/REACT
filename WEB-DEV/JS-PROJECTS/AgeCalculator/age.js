const dateSelector=document.querySelector('.dateSelector')
const calculateBtn=document.querySelector('.calculate')
const displayAge=document.querySelector('.displayAge')

//   2024 12 04
// - 2023 11 05
//------------------
//   0001 00 29

function AgeCalculator(){
  let  todayDate=new Date()
  // console.log(todayDate)
  let birthDay=new Date(dateSelector.value);
  // console.log(birthDay)

  let td=todayDate.getDate()
  let tm=todayDate.getMonth()+1
  let ty=todayDate.getFullYear()
  // console.log(td,tm,ty)

  let bd=birthDay.getDate()
  let bm=birthDay.getMonth()+1
  let by=birthDay.getFullYear()
  // console.log(bd,bm,by)
  
  let days=0,months=0,years=0;
    years=ty-by;
  if(tm>=bm){
    months=tm-bm;
  }else{
    months=12+tm-bm;
    years--;
  }

  if(td>=bd){
    days=td-bd;
  }else{
    days=getMonthInYear(ty,tm)+td-bd;
    tm--;
    if(tm<bm){
      months=12+tm-bm;
      years--;
    }else{
      months=tm-bm;
    }
  }
  
  if(years<0){
    displayAge.innerHTML=(`You are not born Yet`)
  }else{
    displayAge.innerHTML=`You are ${years} years ,${months} months and ${days} days old`
  }
  function getMonthInYear(year,month){
    return new Date(year,month,0).getDate();
  }
}
calculateBtn.addEventListener('click',AgeCalculator)