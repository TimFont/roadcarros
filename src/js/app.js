
const elements = {
    navBar: document.querySelector('.main-nav'),
    slider: document.querySelector('.home-slider')
};



window.onscroll = function(){
    const navigationClasses = elements.navBar.classList;
    pageYOffset > 200 ?
        navigationClasses.add('main-nav--scrolled') :
        navigationClasses.remove('main-nav--scrolled');
};




window.onload = function(){
    slider.startSlider();
}

/*========SLDER======*/


const slider = {
    element: elements.slider,
    sliders: elements.slider.querySelectorAll('.home-slider__slide'),
    slideIndex: 1,
    slideTimer: 7000,

    startSlider(){
        setInterval(() =>{
            this.slideLoop();
        }, slider.slideTimer);
    },

    setSlidePos (index, position, z){
        this.sliders[index -1].style.right = `${position}%`;
        this.sliders[index -1].style.zIndex = `${z}`;
    },

    slideLoop (){
        const slidersLength = this.sliders.length;
        let nextIndex =  this.slideIndex === slidersLength ?
            1 : this.slideIndex + 1;

        let nextItem = this.sliders[nextIndex - 1];
        nextItem.style.opacity = '0';

        setTimeout(() => {
            for(let count = 1; count <= slidersLength; count++){

                if(count === this.slideIndex){
                    this.setSlidePos(count, 0, -2);

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
};


/*if(screen.width < 700) {
    elements.slider.innerHTML='<div class="home-slider__slide home-slider__slide--1">a</div>';   
}else {
    console.log(screen.width);
    for (let index = 1; index <= 3; index++){
        elements.slider.innerHTML += `<div class="home-slider__slide home-slider__slide--${index}">a</div>`;
    }
}*/

