const elements = include('../helpers/elements');

class Slider {
    constructor(interval){
        this.sliderElement = elements.slider;
        this.interval = interval;
        this.state = 1;
    }

    start(){
        
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
   </div>
       `;
    }

}

module.exports = Slider;