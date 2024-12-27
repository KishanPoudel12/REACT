const accordion=document.querySelectorAll('.content-container')

accordion.forEach(item=>{
const question=item.querySelector('.question')
const answer=item.querySelector('.answer')
  question.addEventListener('click',()=>{
    answer.style.display= answer.style.display === 'block' ? 'none' : 'block';
  });
});