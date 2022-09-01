
let range = document.querySelector('form input[type = range]')
undefined
range.value
// '197'
range.getAttribute('min')
// '20'
range.setAttribute('min',100)
undefined
range.getAttribute('min')
// '100'

let username  = document.querySelector('input[type = text]')
{/* <input type=​"text" name id placeholder=​"username">​ */}



let password = document.querySelector('form input[type = password]')
password.setAttribute('placeholder','please enter your password')

console.log(password.value)

let p = document.getElementsByTagName('p')
let inpt = document.getElementsByTagName('input')
let para = document.querySelector('section p')
para.innerText = 'lets keep working hard, lets keep adding values , life moves on \n Made des changes on my js file'
let step2 = document.querySelector('.step2')
step2.innerHTML = '<i>take a decision to be serious with God</i> \n <b> this so important </b> Made des changes on my js file'
// printing out the value of the users input
for(let ipt of inpt){
    console.log(ipt.value)
}
const firstDecison = document.querySelector('li')
undefined
firstDecison.parentElement
{/* <ul>​…​</ul>​ */}
firstDecison.nextElementSibling
{/* <li>​…​</li>​ */}
firstDecison.nextSibling
let parenting = document.querySelector('ul')
parenting.children
// HTMLCollection(5) [li, li, li, li, li]
parenting.children[2]
{/* <li>​…​</li>​ */}
let thirdDecison = parenting.children[2]
undefined
thirdDecison
{/* <li>​…​</li>​ */}
 let secondDecison =thirdDecison.previousElementSibling
 // SELECTING MUTIPLE ITEMS
 let decisions = document.querySelectorAll('li')
 for (let decision of decisions) {
    decision.innerText += '  \nGOD WILL HELP US ACHEIVE THIS'
    
 }


// const alldecisons  = document.querySelectorAll('li')
// let colors = ['red','blue','orange','purple','red','green','red','blue','orange','purple','green']
// alldecisons.forEach((li,idx)=>{
//     li.style.color = colors[idx]
//     li.style.backgroundColor = 'grey'

// })
// getComputedStyle in DOM
let valueOfHEading = document.querySelector('h1')
let value  =getComputedStyle(valueOfHEading)
console.log(value.color)
console.log(value.backgroundColor)
console.log(value.fontSize)
console.log(value.fontFamily)
// manipulating classes
let neededItem = document.querySelector('.item')
// neededItem.style.color = 'orange'
// neededItem.style.textDecoration = 'line-through'
// neededItem.style.opacity = '50%'
neededItem.classList.toggle('changed')
neededItem.classList.toggle('changed')
neededItem.classList.toggle('changed')
// creating new element on javascript
let heading = document.createElement('h1')
heading.innerText = 'STEPS TO SUCCESS ON PROFESSION'
let h1 = document.querySelector('p')
h1.append(heading)
let image = document.createElement('img')
image.src = 'images/God.jfif'
image.style.width = '500px'
let second = document.querySelector('p.step2')
second.insertAdjacentElement('beforebegin',image)
let motivation  = document.createElement('a')
motivation.innerText = 'a motivation to keep you going'
motivation.href = 'https://www.youtube.com/watch?v=fxIlVbvOHyY'
document.body.appendChild(motivation)
let newli = document.createElement('li')
newli.innerText = 'HAVE A PLAN AND FOLLOW IT'
let locatedsite = document.querySelector('.items')
locatedsite.insertAdjacentElement('beforeend',newli)
newli.classList.toggle('item')