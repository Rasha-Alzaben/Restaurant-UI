let menu =document.getElementById('menu');
let navbar=document.querySelector('.navbar');

menu.addEventListener("click",function(){
    navbar.classList.toggle("active");
})