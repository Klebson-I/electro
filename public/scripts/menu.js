
class BurgerMenu{
    constructor() {
        this.stick1=document.querySelector(".stick_1");
        this.stick2=document.querySelector(".stick_2");
        this.stick3=document.querySelector(".stick_3");
        this.menuButton=document.querySelector(".mainNavigation__burgerMenuButton");
        this.burgerMenu=document.querySelector(".mainNavigation__burgerMenu");
        this.isClicked=false;
        this.isShow=false;
        this.addListeners();
    }
    changeMenu(){
        this.burgerMenu.classList.toggle("hidden");
        this.isShow=!this.isShow;
    }
    changeButton(){
        this.changeStickClasses(this.stick1,1);
        this.changeStickClasses(this.stick2,2);
        this.changeStickClasses(this.stick3,3);
        this.isClicked=!this.isClicked;
    }

    changeStickClasses(stick,num){
        stick.classList.toggle(`stick_${num}_clicked`);
        stick.classList.toggle(`stick_${num}`);
    }

    addListeners(){
        this.menuButton.addEventListener('click',()=>{
            this.changeButton();
            this.changeMenu();
        })
        window.addEventListener('resize',()=>{
            if(window.innerWidth>500  && this.isShow){
                this.changeMenu();
            }
            if(this.isClicked&&!this.isShow&&window.innerWidth<=500){
                this.changeMenu();
            }
        })
    }
}

const burgerMenu=new BurgerMenu();