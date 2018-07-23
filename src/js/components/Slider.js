class Slider {
    constructor(parent, content){
        this.parent = parent;
        this.content = content;
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
                    <h1 class = "slider__text>${element.text}</h1>
                </div> 
            `;
        }
        console.log(this.parent);
        this.parent.insertBefore(slider, this.parent.firstChild);
        

    }
}

module.exports = Slider;