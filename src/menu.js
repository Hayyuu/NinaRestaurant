import i from "./food.jpg";
import "./style.css";
// let x=document.querySelector('#content');
function menu(){
    let photo=new Image();
    photo.src=i;
    photo.classList='img';
    let component=document.createElement('article');
    component.textContent="Menu ipsum dolor sit amet consectetur adipisicing elit. Maxime ab necessitatibus consequatur, error quod accusamus.";
    let contentDiv=document.querySelector('#content');
    contentDiv.appendChild(photo);
    contentDiv.appendChild(component);
   
}

export {menu};