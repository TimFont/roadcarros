var navBar = document.querySelector('.main-nav');

window.addEventListener('scroll', function(){
    console.log(pageYOffset);
    if(pageYOffset > 150){
        navBar.classList.add('main-nav--scrolled');
    }else navBar.classList.remove('main-nav--scrolled');
});