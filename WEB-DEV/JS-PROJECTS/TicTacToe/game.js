const cells=document.querySelectorAll('.cell')
const Status=document.querySelector('.status')
const reset=document.querySelector('.reset')

function game(){
  let user='X'
  let boardStatus=Array(9).fill(null)
  let counter=0;
  let gameOver=false;
  cells.forEach((div,ind)=>{
    div.addEventListener('click',(e)=>{
      if(gameOver) return 
      if(boardStatus[ind]===null){
        let clicked=e.target;
          clicked.innerHTML=`${user}`;
          boardStatus[ind]=user;
          console.log(boardStatus)
          if(winCondition(user,boardStatus)){
            Status.innerHTML=` Congratulations ${user} Wins in ${counter+1} moves`
            gameOver=true;
          }else if(counter===8 && !winCondition(user,boardStatus)){
            Status.innerHTML='Well , its a draw then ,better Luck next time'
            gameOver=true;
          }
          else{
            counter++;
            Status.innerHTML=`${user} played his/her move`
          }
          user = user ==='X'?'O' :'X';
        }
        else if(boardStatus[ind]!=null){
          console.log('This position is researved')
        }
        function winCondition(user,boardStatus){
          const wins=
          [ 
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6]  
          ]
          return wins.some(cond=>{
            return cond.every((ind)=> boardStatus[ind]===user) 
          })
        }
    });
  });
  function gameReset(){
    cells.forEach((div)=>{
      div.innerHTML=''
    });
    boardStatus.fill(null)
  }
  reset.addEventListener('click',gameReset)
}
game()