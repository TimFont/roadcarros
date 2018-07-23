function select(itemClass, allOrOne,  parent = document){
    return (allOrOne === 'all') ? 
        parent.querySelectorAll(`.${itemClass}`) :
        parent.querySelector(`.${itemClass}`);

}

const elements = {
    navBar: document.querySelector('.main-nav'),
    mainHeader:document.querySelector('.main-header')

};




module.exports = elements;