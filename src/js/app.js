
const elements = {
    navBar: document.querySelector('.main-nav'),
    slider: document.querySelector('.home-slider')
};


window.addEventListener('scroll', () =>{
    const navigationClasses = elements.navBar.classList;
    pageYOffset > 200 ?
        navigationClasses.add('main-nav--scrolled') :
        navigationClasses.remove('main-nav--scrolled');
});

/*========SLDER======*/
let bannerStatus = 1;
let bannerTimer = 8000;

window.onload = function(){
    bannerLoop();
}
const startBannerLoop = setInterval(function(){
    bannerLoop();
}, bannerTimer);

/*if(screen.width < 700) {
    elements.slider.innerHTML='<div class="home-slider__slide home-slider__slide--1">a</div>';   
}else {
    console.log(screen.width);
    for (let index = 1; index <= 3; index++){
        elements.slider.innerHTML += `<div class="home-slider__slide home-slider__slide--${index}">a</div>`;
    }
}*/

function bannerLoop(){
    function rightAndZ(elementNumber,right, z){
            document.querySelector(`.home-slider__slide--${elementNumber}`).style.right = `${right}%`;
            document.querySelector(`.home-slider__slide--${elementNumber}`).style.zIndex = `${z}`;
    }

    if (bannerStatus === 1) {
        document.querySelector(`.home-slider__slide--2`).style.opacity = '0';

        setTimeout(() => {
            rightAndZ(1, 0, -2);
            rightAndZ(2, -100, -1);
            rightAndZ(3, 100, -3);
        }, 500);

        setTimeout(() => {
            document.querySelector(`.home-slider__slide--2`).style.opacity = '1';
        }, 1000);

        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {
        document.querySelector(`.home-slider__slide--3`).style.opacity = '0';

        setTimeout(() => {
            rightAndZ(1, 100, -3);
            rightAndZ(2, 0, -2);
            rightAndZ(3, -100, -1);
        }, 500);

        setTimeout(() => {
            document.querySelector(`.home-slider__slide--3`).style.opacity = '1';
        }, 1000);

        bannerStatus = 3;
    }

    else if (bannerStatus === 3) {
        document.querySelector(`.home-slider__slide--1`).style.opacity = '0';

        setTimeout(() => {
            rightAndZ(1, -100, -1);
            rightAndZ(2, 100, -3);
            rightAndZ(3, 0, -2);
        }, 500);

        setTimeout(() => {
            document.querySelector(`.home-slider__slide--1`).style.opacity = '1';
        }, 1000);

        bannerStatus = 1;
    }
}