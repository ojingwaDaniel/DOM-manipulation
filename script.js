
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


const li  = document.querySelector('li')


