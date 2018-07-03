
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

