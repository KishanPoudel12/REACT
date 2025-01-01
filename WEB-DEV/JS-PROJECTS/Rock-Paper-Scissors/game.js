const btn=document.querySelectorAll('.choice')
const playerChoice=document.querySelector('#player-choice')
const computerChoice=document.querySelector('#computer-choice')
const gameResult=document.querySelector('#game-result')
function playGame(){
  let humanMove;
 btn.forEach((btns)=>{
  btns.addEventListener('click',(e)=>{
    humanMove=e.target.innerText
    playerChoice.innerHTML=humanMove

    function computerPlay(){
      let random=Math.floor(Math.random()*10+1)
      console.log(random)
      let computerMove;
      if(random>=0 && random<=3){
        computerMove= '✊ Rock'
        computerChoice.innerHTML='✊ Rock'
      }else if(random>=4 && random<=7){
     computerMove= '✋ Paper'
     computerChoice.innerHTML='✋ Paper'
    }else{
      computerMove='✌️ Scissors'
      computerChoice.innerHTML='✌️ Scissors'
    }

    function Result(){
      if((humanMove==='✊ Rock' && computerMove==='✊ Rock') || (humanMove==='✋ Paper' && computerMove==='✋ Paper')||(humanMove==='✌️ Scissors' && computerMove==='✌️ Scissors') ){
        gameResult.innerText='Draw'
      }else if((humanMove==='✋ Paper' && computerMove==='✊ Rock') || (humanMove==='✌️ Scissors' && computerMove==='✋ Paper') || (humanMove==='✊ Rock' && computerMove==='✌️ Scissors') ){
        gameResult.innerText='Human wins'
      }else{
        gameResult.innerText='Computer wins'
      }
    }
    Result()
  }
  computerPlay()
})
 })
} 
playGame()
