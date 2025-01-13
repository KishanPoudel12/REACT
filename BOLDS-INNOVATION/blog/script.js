const blogs=document.querySelectorAll('.blog')
blogs.forEach(blog=>blog.addEventListener('click',(e)=>{
  
  const heading=blog.querySelector('.heading')
  console.log(heading)
  const  content=blog.querySelector('.content')
   console.log(content)

   if(heading&&content){
     if(heading.classList.contains('show')){
      heading.classList.remove('show')
      content.classList.add('show')
     }else{
     heading.classList.add('show')
     content.classList.remove('show')
     }
   }
}))

const footerDate=document.querySelector('.currentYear')
console.log(footerDate)
const date=new Date;
const currYear=date.getUTCFullYear()
footerDate.innerHTML=`<p class="currentYear">All Rights Reserved, ${date.getUTCFullYear()} </p>`
// footerDate.insertAdjacentText("beforeend", `${currYear}`)\

const links=document.querySelectorAll('nav a')
const element=document.querySelectorAll('nav li')
console.log(element)
console.log(links)

const LinkArray=Array.from(links)
LinkArray.forEach( (link,index)=>
 element[index].style.backgroundColor = ( link.href === window.location.href) ? 'red' : 'white'
)

const div=document.createElement('div')
div.classList.add('cont')

const img=document.createElement('img')
img.src='https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699'
div.appendChild(img)
document.querySelector('body').appendChild(div)