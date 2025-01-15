import React,{useEffect, useState} from 'react'
import './style.css'
function TicTacToe() {
  const [square,setSquare]=useState(Array(9).fill(null))
  const [nextX,setNextX]=useState(true)
  const [isWin,setIsWin]=useState(false)
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function passInd(getCurrInd){
    if(square[getCurrInd]!==null || winCondn()) return 
      console.log("curr Ind=",getCurrInd)
      const updatedSquare=[...square]
      updatedSquare[getCurrInd] =  nextX ? 'X' : 'O'
      setNextX(!nextX)
      setSquare(updatedSquare)
      console.log("updatedSq=",updatedSquare)
  }
  function winCondn(){
   for(let line of wins){
     const [a , b , c] =line;
     if(square[a] && square[a] === square[b] && square[a] === square[c]){
       return square[a]
      }
    }
   return null
  }

  useEffect(()=>{
    const winner=winCondn()
    console.log(winner)
    if(winner){
      setIsWin(winner)
    }
  },[square])
 
  function isDraw(){
     return square.every(item=>item!=null) && !isWin
  }

  console.log("Square",square)
  return (
    <div className='container'>
      <h1>Tic  Tac Toe </h1>
      <div className='game-container' >
        {
          square.map((_,ind)=><div  key={ind} className='squares' onClick={(e)=>{passInd(ind)}}>
            {
              square[ind]
            }
          </div>)
        }
      </div>
      <span>
        {
        winCondn() ? `${winCondn()} wins` : null
        }
      </span>
      <span>    
        {
           isDraw() ?  'Draw' : null
        }
      </span>

    </div>
  )
}

export default TicTacToe