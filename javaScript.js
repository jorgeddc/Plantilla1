document.addEventListener("DOMContentLoaded", ()=>{
  
  
window.addEventListener('scroll', fixNav);
const home = document.querySelector(".home");
const hamburguer = document.querySelector(".hamburguer");
const picture = document.querySelectorAll('.picture');
const gallery = document.querySelector('.gallery');
const dianaImage = document.querySelector('.transform');
const close = document.querySelector('.close');
const arrowApear = document.querySelector(".arrow-up");
const body = document.getElementById('body');
const  containerResponsive = document.querySelector('.container-responsive-menu');









const centerImage = (diana) =>{
console.log(diana);
diana.classList.toggle('up');}

hamburguer.addEventListener("click", () =>{
              
        console.log('jp;')
        hamburguer.querySelectorAll("span")[0].classList.toggle("active");
        hamburguer.querySelectorAll("span")[1].classList.toggle("active");
        hamburguer.querySelectorAll("span")[2].classList.toggle("active");
        
        containerResponsive.classList.toggle('active');
       
              
           
          })
          
picture.forEach(element=>{
  
  
  
  element.addEventListener(
    'click', (e)=>{
          if(window.scrollX < body.offsetWidth - 785)// no engranda la foto si es tambaño movil
          
          { 
           
          console.log(body.offsetWidth)
          const diana = (e.target);
          centerImage(diana);
       }
})


    
        })



        function fixNav()
         {
            if(window.scrollY > home.offsetHeight + 100) {
                arrowApear.classList.add('active')
               
              
            
                } 
            
                else {
                arrowApear.classList.remove('active')
              
              
        
                
         }
        }
      })