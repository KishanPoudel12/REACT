// //This is how react see's under the hood

function costomRender(reactElem,container){
  /*
  //this is the way the react does it but is it worth it ??
  //The answer is no ,It is much complex and so react now has to find another way to do it then 
  const domElem=document.createElement(reactElem.type)
  domElem.innerHTML=reactElem.children
  domElem.setAttribute('href',reactElem.props.href)
  domElem.setAttribute('target',reactElem.props.target)
  container.append(domElem)
  */

  const domElem=document.createElement(reactElem.type)
  domElem.innerHTML=reactElem.children
  for (const prop in reactElem.props) {
      if(prop==='children')  continue
      domElem.setAttribute(prop,reactElem.props[prop])
    }
    container.appendChild(domElem)
  }
const reactElem={
  type:'a', //Anchor tag
   props:{
    href:'https://google.com',
    target:'_blank'
   },
   children:'click me to visit google'
}
const mainContainer=document.querySelector('#root')
costomRender(reactElem,mainContainer)
 


// Here's the React way of doing it 

//here the react is not defined becoz it is normal self creation of react 
const element= React.createElement('p',{href:"www.google.com",target:"_blank"},'Hello world')  //first is the tag ,second is the attributes ,third is the innerHTML or text

