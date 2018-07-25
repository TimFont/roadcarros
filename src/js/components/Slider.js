class Slider {
    constructor(parent, content){
        this.parent = parent;
        this.content = content;
        this.state = 0;
        this.slides = [];
    }

    start(interval){
        setInterval(()=> {
            this.nextState();
        }, interval);

    }


    render(){
        const slider = document.createElement('div');
            slider.classList.add('slider');



        for(let countInd = 1; countInd <= this.content.length; countInd ++){
            const element = this.content[countInd - 1];
            let position;
            if (countInd === 1) position = 'primary';
            else if (countInd === 2) position = 'next';
            else position ='beyond';

            slider.innerHTML += `
                <div class = "slider__slide slider__slide--${position}">
                    <div class = "slider__image" style = "background-image: url(${element.img})"></div>
                    <h1 class = "slider__text">${element.text}</h1>
                </div> 
            `;

        }

        this.parent.insertBefore(slider, this.parent.firstChild);
        this.slides.push(...this.parent.querySelectorAll('.slider__slide'));
        

    }

    nextState (){
        const slidesLength = this.content.length;
        let nextIndex = (this.state === (slidesLength - 1)) ? 0 : this.state + 1,
            beyondIndex = nextIndex === (slidesLength - 1) ? 0 : nextIndex + 1,
            beyondItem = this.slides[beyondIndex];
            beyondItem.style.opacity = '0';

        setTimeout(() => {
            for(let count = 0; count < 3; count++){
                let currentItem = this.slides[count];
                console.log(currentItem);

                if(count === this.state){
                    Slider.transition(currentItem, 'beyond', 'primary');
        
                }
                else if (count === nextIndex) {
                    Slider.transition(currentItem, 'primary', 'next');
                }
                else {
                    Slider.transition(currentItem, 'next', 'beyond');

                }
            }

        this.state = nextIndex;
        
        }, 500);
        
        setTimeout(() => {
            beyondItem.style.opacity = '1';
        }, 1000);

        
    }

    static transition(item, add, remove) {
        item.classList.add(`slider__slide--${add}`);
        item.classList.remove(`slider__slide--${remove}`);
    }
}

module.exports = Slider;