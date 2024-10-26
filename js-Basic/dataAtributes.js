// const test=document.querySelector('[data-test]')

// console.log(test.dataset)          //it removes the data from daat-test and only keep test and also if there is a two word variable it keeps its name in camel case form :)
// //so we can change the value of it 

// test.dataset.test='kishan'

//so let us build a couter app 

// const buttons=document.querySelectorAll('button')

// buttons.forEach( click=>{
//   click.addEventListener('click', e=>{
//     const noClick= parseInt(click.dataset.clicked)
//     click.dataset.clicked=noClick+1
//     console.log(noClick)
//   })
// })


const buttoned=document.querySelectorAll('button')
buttoned.forEach( buttons=>{
  buttons.addEventListener('click' ,(e)=>{
        const value=parseInt(buttons.dataset.clicked);
        buttons.dataset.clicked=value+1;
  })
})