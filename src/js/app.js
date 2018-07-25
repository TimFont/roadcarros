const elements = require('./helpers/elements');
const Slider = require('./components/Slider');





window.onload = () => {
    //roda slide
    if (screen.width > 500) {

        const slidesContent = [
            { text: 'test1, best car ever', img: './img/slide1.jpg' },
            { text: 'test2, more velocity', img: './img/slide2.jpg' },
            { text: 'test2, more velocity', img: './img/slide3.jpg' }
        ];
        const mainSlider = new Slider(elements.mainHeader, slidesContent);
        mainSlider.render();
        mainSlider.start(5000);




        window.onscroll = function () {
            const navigationClasses = elements.navBar.classList;
            pageYOffset > 200 ?
                navigationClasses.add('main-nav--scrolled') :
                navigationClasses.remove('main-nav--scrolled');
        };


    }



    //não roda
    else if (screen.width < 500) {
        elements.mainHeader.style.backgroundImage = 'url(./img/slide1.jpg)';

    }


};



