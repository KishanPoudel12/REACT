// const grandParent = document.querySelector('#grandParent')
// console.log(grandParent)
// grandParent.style.color='green'

// //now what to do to go inside the grandParent and then see its child 

// const parent1=grandParent.children[0]
// parent1.style.color='red'
// const parent2=grandParent.children[1].style.color='green' // parent1.nextElementSibling

// const child1=parent1.children[0]
// child1.style.color='blue'

// const child2=child1.nextElementSibling.style.color='orange'

const grandParent=document.querySelector('#grandParent')

const children=grandParent.querySelectorAll('#child')

children.forEach(child =>( child.style.color='green'))

const parent=grandParent.querySelectorAll('#parent')
parent.forEach(parent=> (parent.style.color='orange'))