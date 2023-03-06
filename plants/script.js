'use strict'

let button = document.querySelectorAll('.project');

let service = document.querySelectorAll('.card');


for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.id == "1") {
            if (button[0].classList.contains('active')) {
                removeChoiseGardenCare();
            } else {
                choiseGardenCare();
            }
            
        } else if (e.target.id == "2") {
            if (button[1].classList.contains('active')) {
                removeChoiseLawnCare();
            } else {
                choiseLawnCare();
            }
            
        } else if (e.target.id == "3") {
            if (button[2].classList.contains('active')) {
                removeChoisePlanting();
            } else {
                choisePlanting();
            }
        }

        let buttonGardenCare = button[0].classList.contains('active');
        let buttonLawnCare = button[1].classList.contains('active');
        let buttonPlanting = button[2].classList.contains('active');

        if (buttonGardenCare && buttonLawnCare && buttonPlanting) {
            removeChoiseGardenCare();
            removeChoisePlanting();
            button[1].classList.remove('active');
        } else if(buttonGardenCare && buttonLawnCare) {
            service[0].classList.remove('blur');
            service[2].classList.remove('blur');
            service[4].classList.remove('blur');
        } else if(buttonGardenCare && buttonPlanting) {
            service[0].classList.remove('blur');
            service[1].classList.remove('blur');
            service[3].classList.remove('blur');
            service[4].classList.remove('blur');
            service[5].classList.remove('blur');
        } else if(buttonLawnCare && buttonPlanting) {
            service[1].classList.remove('blur');
            service[2].classList.remove('blur');
            service[3].classList.remove('blur');
            service[5].classList.remove('blur');
        }
    })
}

const choiseGardenCare = () => {
    button[0].classList.add('active');
    service[1].classList.add('blur');
    service[2].classList.add('blur');
    service[3].classList.add('blur');
    service[5].classList.add('blur');
    service[0].classList.remove('blur');
    service[4].classList.remove('blur');
}

const removeChoiseGardenCare = () => {
    button[0].classList.remove('active');
    service[1].classList.remove('blur');
    service[2].classList.remove('blur');
    service[3].classList.remove('blur');
    service[5].classList.remove('blur');
}

const choiseLawnCare = () => {
    button[1].classList.add('active');
    service[0].classList.add('blur');
    service[1].classList.add('blur');
    service[3].classList.add('blur');
    service[4].classList.add('blur');
    service[5].classList.add('blur');
    service[2].classList.remove('blur');
}

const removeChoiseLawnCare = () => {
    button[1].classList.remove('active');
    service[0].classList.remove('blur');
    service[1].classList.remove('blur');
    service[3].classList.remove('blur');
    service[4].classList.remove('blur');
    service[5].classList.remove('blur');
}

const choisePlanting = () => {
    button[2].classList.add('active');
    service[0].classList.add('blur');
    service[2].classList.add('blur');
    service[4].classList.add('blur');
    service[1].classList.remove('blur');
    service[3].classList.remove('blur');
    service[5].classList.remove('blur');
}

const removeChoisePlanting = () => {
    button[2].classList.remove('active');
    service[0].classList.remove('blur');
    service[2].classList.remove('blur');
    service[4].classList.remove('blur');
}

console.log('57.5 баллов');