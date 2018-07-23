const elements = require('../helpers/elements');

class Slider {
    constructor(interval){
        

        this.sliderElement = elements.slider;
        //this.slides = slides,
        this.interval = interval;
        this.state = 1;
    }

    setSlidePos(index, position, z, itens){
        console.log(elements);
        //itens[index -1].style.right = `${position}%`;
        //itens[index -1].style.zIndex = `${z}`;

        itens[index -1].classList.add('home-slider__slide--beyond');
        
        itens[index -1].classList.remove('home-slider__slide--primary');
 
    }

    slideLoop(){

        const slides = document.querySelectorAll('.home-slider__slide');
        const slidesLength = slides.length;
        let nextIndex =  (this.state === slidesLength) ? 1 : this.state + 1;
        console.log(nextIndex);
        let nextItem = slides[nextIndex - 1];
            nextItem.style.opacity = '0';

        setTimeout(() => {
            for(let count = 1; count <= slidesLength; count++){
    
                if(count === this.state){
                    this.setSlidePos(count, -100, -2, slides);
    
                }
                else if (count === nextIndex) {
                    this.setSlidePos(count, -100, -1);
                }
                else {
                    this.setSlidePos(count, 100, -3);
                }
            }
            this.slideIndex = nextIndex;
    
        }, 500);
        
        setTimeout(() => {
            nextItem.style.opacity = '1';
        }, 1000);



    }

    start(){
        
        

    }

    insert(){
        this.sliderElement.innerHTML = `
        <div class="home-slider__slide home-slider__slide--primary">
           <div class= 'home-slider__image home-slider__image--1'></div>
           <h1 class="home-slider__text">asdaf</h1>
       </div>
       <div class="home-slider__slide home-slider__slide--next">
           <div class= 'home-slider__image home-slider__image--2'></div>
           <h1 class="home-slider__text">cvbcaf</h1>
       </div>
       <div class="home-slider__slide home-slider__slide--beyond">
           <div class= 'home-slider__image home-slider__image--3'></div>
           <h1 class="home-slider__text">adfgdh</h1>
       </div>`;
    }

}




module.exports = Slider;