// JavaScript Document
const menuTrigger = document.getElementById('menuTrigger');
const navMenu = document.getElementById('navMenu');
// toggle nav menu

menuTrigger.addEventListener('click',()=> {
   if (navMenu.style.display != 'none') {
    navMenu.style.display ='none';
    menuTrigger.setAttribute('aria-expanded', 'false');
   } else {
    navMenu.style.display= "block";
    menuTrigger.setAttribute('aria-expanded', 'true');
   }
})