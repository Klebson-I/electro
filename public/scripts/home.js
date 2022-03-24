

class AnimateText{

    arrayOfStrings=[
        "INSTALACJE ELEKTRYCZNE",
        "INSTALACJE ODGROMOWE",
        "INSTALACJE ALARMOWE",
        "INSTALACJE KAMER",
        "SYSTEMY INTELIGENTNEGO DOMU",
        "PRZYŁĄCZA WLZ"
    ];

    stringsArrActualIndex=0;

    constructor() {
        this.textSpan=document.querySelector('.animateTextDiv__text');
    }

    startAnimation(){
        const arrayOfStringsLength=this.arrayOfStrings.length;
        if(this.stringsArrActualIndex===arrayOfStringsLength-1){
            this.stringsArrActualIndex=0;
        }
        this.animate(this.arrayOfStrings[this.stringsArrActualIndex]);
    }

    animate(sentence){
        const maxIndexOfSentence=sentence.length-1;
        let actualSentenceIndex=0;
        const splitSentence=sentence.split("");
        let temporaryText="";

        const interval=setInterval(()=>{
            temporaryText+=splitSentence[actualSentenceIndex];
            this.textSpan.innerText=temporaryText;
            if(actualSentenceIndex===maxIndexOfSentence){
                clearInterval(interval);
                this.animateDots();
            }
            actualSentenceIndex++;
        },50);

    }

    animateDots(){
        let actualSentence=this.arrayOfStrings[this.stringsArrActualIndex];
        let temporaryText=actualSentence;
        let actualSentenceMaxLength=actualSentence.length+3;
        let numberOfIterations=12;
        let iteration=0;
        const interval=setInterval(()=>{
            temporaryText+=".";
            this.textSpan.innerText=temporaryText;
            if(temporaryText.length===actualSentenceMaxLength){
                temporaryText=actualSentence;
            }
            iteration++;
            if(iteration===numberOfIterations){
                clearInterval(interval);
                this.stringsArrActualIndex++;
                this.startAnimation();
            }
        },200)
    }
}
const animation=new AnimateText();
animation.startAnimation();
