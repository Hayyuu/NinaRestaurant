import {home} from "./initial.js";
import {contact} from "./contact.js";
import {menu} from "./menu.js";

let home_btn=document.querySelector('.home');
let menu_btn=document.querySelector('.menu');
let contact_btn=document.querySelector('.contact');
let contenDiv=document.querySelector('#content');

let btn_list=document.querySelectorAll('button');
home_btn.addEventListener('click',()=>{
    contenDiv.textContent="";
    btn_list.forEach(x=>x.classList.remove('clicked'));
    home_btn.classList='clicked';
    home();
})
menu_btn.addEventListener('click',()=>{
    contenDiv.textContent="";
    btn_list.forEach(x=>x.classList.remove('clicked'));
    menu_btn.classList='clicked';
    menu();
})
contact_btn.addEventListener('click',()=>{
    contenDiv.textContent="";
    btn_list.forEach(x=>x.classList.remove('clicked'));
    contact_btn.classList='clicked';
    contact();
})


home_btn.classList='clicked';
home();
