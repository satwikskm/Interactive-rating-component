'use strict'


let button =document.querySelectorAll('[type=button]')

let submit=document.querySelector('[type=submit]')

let rating =document.getElementById('rating')

let switchVal=0



for(let i of button){
   
    i.addEventListener('click',(e)=>{
        switchVal =1
        for(let i of button){
            i.classList.remove('active')
        }
        
        
        e.target.classList.add('active')
        rating.innerText=e.target.innerText
    })
  
}
console.log(switchVal)



    submit.addEventListener('click',()=>{
        
        if(switchVal === 1){
            document.getElementById('output').style.display="block"
            document.getElementById('main').style.display="none"

        }
        
    })


