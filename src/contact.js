import i from "./food.jpg";
import "./style.css";
// let x=document.querySelector('#content');
function contact(){
    let photo=new Image();
    photo.src=i;
    photo.classList='img';
    let component=document.createElement('article');
    component.textContent="Contact ipsum dolor sit amet consectetur adipisicing elit. Maxime ab necessitatibus consequatur, error quod accusamus.";
    let contentDiv=document.querySelector('#content');
    contentDiv.appendChild(photo);
    contentDiv.appendChild(component);
   
}

export {contact};