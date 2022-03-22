
const stick1=document.querySelector(".stick_1");
const stick2=document.querySelector(".stick_2");
const stick3=document.querySelector(".stick_3");
const menuButton=document.querySelector(".mainNavigation__burgerMenuButton");
const burgerMenu=document.querySelector(".mainNavigation__burgerMenu");

let isClicked=false;
let isShow=false;

const changeMenu=()=>{
    burgerMenu.classList.toggle("hidden");
    isShow=!isShow;
}

const changeButton=()=>{
    stick1.classList.toggle('stick_1_clicked');
    stick1.classList.toggle('stick_1');
    stick2.classList.toggle('stick_2_clicked');
    stick2.classList.toggle('stick_2');
    stick3.classList.toggle('stick_3');
    stick3.classList.toggle('stick_3_clicked');
    isClicked=!isClicked;
}

menuButton.addEventListener('click',()=>{
    changeButton();
    changeMenu();
})
window.addEventListener('resize',()=>{
    if(window.innerWidth>500  && isShow){
        changeMenu();
    }
    if(isClicked&&!isShow&&window.innerWidth<=500){
        changeMenu();
    }
})