let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    navbar.classList.toggle('active');  
    menu.classList.toggle('fa-times');

}

window.onscroll = () =>{
    navbar.classList.toggle('active');  
    menu.classList.toggle('fa-times');
    
}

document.querySelector('#search-icon').onclick = () =>{
 document.querySelector('#search-form').classList.toggle('active');
     
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
        
   }