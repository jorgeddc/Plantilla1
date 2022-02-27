document.addEventListener("DOMContentLoaded", ()=>{

  
const hamburguer = document.querySelector(".hamburguer")
const picture = document.querySelectorAll('.picture');
const gallery = document.querySelector('.gallery')
const dianaImage = document.querySelector('.transform');
const close = document.querySelector('.close');

const centerImage = (diana) =>{
console.log(diana);
diana.classList.toggle('up');}

hamburguer.addEventListener("click", () =>{
              
        console.log('jp;')
        hamburguer.querySelectorAll("span")[0].classList.toggle("active")
        hamburguer.querySelectorAll("span")[1].classList.toggle("active")
        hamburguer.querySelectorAll("span")[2].classList.toggle("active")
              
           
          })
          
picture.forEach(element=>{
  element.addEventListener(
        'click', (e)=>{
           
          const diana = (e.target);
        centerImage(diana);
})
    
        })
      })