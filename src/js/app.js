var navBar = document.querySelector('.main-nav');

window.addEventListener('scroll', function(){
    console.log(pageYOffset);
    if(pageYOffset > 200){
        navBar.classList.add('main-nav--scrolled');
    }else navBar.classList.remove('main-nav--scrolled');
});