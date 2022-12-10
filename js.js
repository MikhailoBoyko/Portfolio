const slide=document.querySelectorAll('.slide');
const next=document.getElementById('next');
const prev=document.getElementById('prev');
const modal=document.getElementById('modal');
const close=document.querySelector('.close');
const modalBtn=document.querySelector('#open-modal');
const burger=document.getElementById('burger');
const menu=document.querySelector('.menu');
let i=0;
window.addEventListener('load',()=>{
    if(i==0){        
        prev.style.display='none';
     } ;
})
function check(i){
    switch(i){
        
            case (slide.length-1):
                next.style.display='none';
            break;
            case 0:
                prev.style.display='none';
            break;
            default:
            next.style.display='block';
            prev.style.display='block';
            break;
    }
}
burger.addEventListener('click',()=>{
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
})
modalBtn.addEventListener('click',()=>{
    modal.style.display='flex';
    document.body.classList.add('stop-scroll');
})
close.addEventListener('click',()=>{
    modal.style.display='none';
    document.body.classList.remove('stop-scroll');
})
next.addEventListener('click',()=>{
    slide.forEach(sl=>{
        sl.classList.remove('current');
    });
    i++;
    console.log(i);
    slide[i].classList.add('current');
    check(i);
})
prev.addEventListener('click',()=>{
    slide.forEach(sl=>{
        sl.classList.remove('current');
    });
    i--;
    slide[i].classList.add('current');
    check(i);
})
