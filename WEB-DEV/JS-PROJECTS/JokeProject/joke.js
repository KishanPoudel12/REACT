const loadJoke=async ()=>{
  try{
    document.querySelector('#loadingJoke').innerHTML="Loading...." 
    console.log("Hi")
    const  jokeFetch=await fetch('https://api.chucknorris.io/jokes/random' ,
     {
      headers : {
        Accept:"application/json"
      }
    })
    const jokedata=await jokeFetch.json();
    document.querySelector('#loadingJoke').innerHTML=(jokedata.value).replaceAll('Chuck Norris','rajnikant');
  }catch(error){
    console.log(error)
  }
}
document.querySelector('#loadJokeBtn').addEventListener('click',loadJoke)
