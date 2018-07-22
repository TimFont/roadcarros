function select(itemClass, allOrOne,  parent = document){
    return (allOrOne === 'all') ? 
        parent.querySelectorAll(`.${itemClass}`) :
        parent.querySelector(`.${itemClass}`);

}

const elements = {
    navBar: select('main-nav'),
    slider: select('home-slider'),
    slides: select('home-slider__slide', 'all')
};

module.exports = elements;