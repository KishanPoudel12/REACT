const quizQuestions = [
  {
      question: "What is the capital of France?",
      answers: [
          { text: "Berlin", correct: false },
          { text: "Madrid", correct: false },
          { text: "Paris", correct: true },
          { text: "Rome", correct: false }
      ]
  },
  {
      question: "Which planet is known as the Red Planet?",
      answers: [
          { text: "Earth", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Venus", correct: false }
      ]
  },
  {
      question: "What is 2 + 2?",
      answers: [
          { text: "3", correct: false },
          { text: "4", correct: true },
          { text: "5", correct: false },
          { text: "6", correct: false }
      ]
  },
  {
      question: "Which programming language is used for web development?",
      answers: [
          { text: "Python", correct: false },
          { text: "Java", correct: false },
          { text: "JavaScript", correct: true },
          { text: "C++", correct: false }
      ]
  },
  {
      question: "What is the boiling point of water at sea level?",
      answers: [
          { text: "90°C", correct: false },
          { text: "100°C", correct: true },
          { text: "110°C", correct: false },
          { text: "120°C", correct: false }
      ]
  }
];
const nextQstn=document.querySelector('#next-btn')
function displayQstn(){
  const qstn =document.querySelector('#question')
  const btn=document.querySelectorAll('.btn')

  let currQstn=Math.floor(Math.random()*quizQuestions.length)
  qstn.innerHTML=`${quizQuestions[currQstn].question}`

  quizQuestions[currQstn].answers.forEach((ans,ind)=>{
      btn[ind].innerHTML=`${ans.text}`
      btn[ind].classList.remove('true','false');
      btn[ind].classList.add(`${ans.correct}`);

      btn[ind].addEventListener('click',()=>{
        if(btn[ind].classList.contains('true')){
          btn[ind].style.color='yellow'
        }else{
          btn[ind].style.color='red'
        }
      })
      btn[ind].style.color='white'
  })
}
nextQstn.addEventListener('click',displayQstn)
console.log(quizQuestions[0].answers[0].text)