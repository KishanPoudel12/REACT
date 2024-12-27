const pokeInput=document.querySelector('.pokeInput')
const pokeSearch=document.querySelector('.pokeSearch')
const pokeShow=document.querySelector('.pokeShow')

const fetchPoke=async ()=>{
  try{
    const inputPoke= pokeInput.value.toLowerCase()
    const api_fetch=await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPoke}`);
    const response=await api_fetch.json()
    console.log(response)
    const pokemonSprites=response.sprites.front_default;
    pokeShow.src=pokemonSprites;
  }catch(error){
    console.log(error)
  }
}
pokeSearch.addEventListener('click',fetchPoke)
