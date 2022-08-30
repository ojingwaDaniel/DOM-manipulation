let submit = document.getElementById('btn')
// submit.addEventListener('click',()=>{
//     alert('try put password wee strong o')
// })
let p = document.getElementsByTagName('p')
let inpt = document.getElementsByTagName('input')
let para = document.querySelector('section p')
para.innerText = 'lets keep working hard, lets keep adding values , life moves on \n Made des changes on my js file'
let step2 = document.querySelector('.step2')
step2.innerHTML = '<i>take a decision to be serious with God</i> \n Made des changes on my js file'
// printing out the value of the users input
for(let ipt of inpt){
    console.log(ipt.value)
}