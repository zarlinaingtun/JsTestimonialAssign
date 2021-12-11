//UI
const userimageel=document.querySelector('.user-image');
const usernameel=document.querySelector('.username');
const roleel=document.querySelector('.role');
const testimonialel=document.querySelector('.testimonial');
const circles=document.querySelectorAll('.circle');

let testimonials=[
    {
        name:"Crystal",
        role:"Marketing",
        image:"https://randomuser.me/api/portraits/women/12.jpg",
        text:"Crystal-Lorem ipsum dolor sit, amet anditiis est exercitationem nisi accusamus, explicabo voluptas, magnam autem inventore expedita dolorem modi accusantium consectetur harum debitis consequuntur qui similique vel! Impedit sint, sed rerum laboriosam fugiat, iure expedita, odit unde quidem placeat minus optio numquam."
    },
    {
        name:"John",
        role:"Accountant",
        image:"https://randomuser.me/api/portraits/men/33.jpg",
        text:"John-Lorem ipsum dolor sit, amet anditiis est exercitationem nisi accusamus, explicabo voluptas, magnam autem inventore expedita dolorem modi accusantium consectetur harum debitis consequuntur qui similique vel! Impedit sint, sed rerum laboriosam fugiat, iure expedita, odit unde quidem placeat minus optio numquam."
    },
    {
        name:"Marry",
        role:"HR",
        image:"https://randomuser.me/api/portraits/women/14.jpg",
        text:"Marry-Lorem ipsum dolor sit, amet anditiis est exercitationem nisi accusamus, explicabo voluptas, magnam autem inventore expedita dolorem modi accusantium consectetur harum debitis consequuntur qui similique vel! Impedit sint, sed rerum laboriosam fugiat, iure expedita, odit unde quidem placeat minus optio numquam."
    }
];
let idx=0;
function removeactive(){
    circles.forEach(circle=>{
        circle.classList.remove('active');
    });
}
function addactive(){
    if(idx==0){
        removeactive();
        circles[0].classList.add('active');

    }
    else if(idx==1){
        removeactive();
        circles[1].classList.add('active');

    }
    else{
        removeactive();
        circles[2].classList.add('active');
        
    }
}
function updatetestimonial(){
    addactive();
    let {name,role,image,text}=testimonials[idx];

    usernameel.textContent=name;
    userimageel.src=image;
    roleel.textContent=role;
    testimonialel.textContent=text;
    idx++;
    if(idx>testimonials.length-1){
        idx=0;
    }
}
updatetestimonial();
setInterval(updatetestimonial,6000);
