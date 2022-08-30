let submit = document.getElementById('btn')
// submit.addEventListener('click',()=>{
//     alert('try put password wee strong o')
// })
let p = document.getElementsByTagName('p')
let inpt = document.getElementsByTagName('input')
let para = document.querySelector('section p')
para.innerText = 'lets keep working hard, lets keep adding values , life moves on'
// printing out the value of the users input
for(let ipt of inpt){
    console.log(ipt.value)
}