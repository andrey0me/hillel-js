let sliderEl = document.getElementById("slider");
let btnNextEl = document.getElementById("next");
let btnPrevEl = document.getElementById("prev");
let navEl = document.getElementById("slider-nav-box");

function navInitialize() {
    let imgCount = document.getElementsByClassName("slider-el").length;
    
    for (let i = 1; i <= imgCount; i++) {
        let newDot = document.createElement('button');
        newDot.classList.add('nav');

        if (i===1) {
            newDot.classList.add('selected');
        }

        newDot.id = 'nav-' + i;
        navEl.appendChild(newDot);
    }
}

function displayNavImg (dotId) {
    let slideId = `img-${parseInt(dotId.replace("nav-", ""))}`;
    let selectedSlide = document.getElementById(slideId);
    let selectedDot = document.getElementById(dotId);

    getCurrentSlide().classList.remove('visible');
    getCurrentNavDot().classList.remove('selected');
    selectedSlide.classList.add('visible');
    selectedDot.classList.add('selected');
}

function getCurrentSlide() {
    return document.querySelector(".visible");
}

function getCurrentNavDot() {
    return document.querySelector(".selected");
}

function checkButton(button) {
    let currentSlide = getCurrentSlide();

    let checkId;
    let checkSlide;

    if (button.id === 'next') {
        checkId = `img-${parseInt(currentSlide.id.replace("img-", "")) + 1}`;
        checkSlide = document.getElementById(checkId);

        btnNextEl.disabled = !checkSlide;

    }
    else if (button.id === 'prev') {
        checkId = `img-${parseInt(currentSlide.id.replace("img-", "")) - 1}`;
        checkSlide = document.getElementById(checkId);

        btnPrevEl.disabled = !checkSlide;
    }

}

function nextSlide(elem) {
    if (elem) {
        let nextId = `img-${parseInt(elem.id.replace("img-", "")) + 1}`;

        let nextSlide = document.getElementById(nextId);

        if (nextSlide) {
            elem.classList.remove('visible');
            nextSlide.classList.add('visible');
        }
    }
}

function prevSlide(elem) {
    if (elem) {
        let prevId = `img-${parseInt(elem.id.replace("img-", "")) - 1}`;

        let prevSlide = document.getElementById(prevId);

        if (prevSlide) {
            elem.classList.remove('visible');
            prevSlide.classList.add('visible');
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkButton(btnNextEl);
    checkButton(btnPrevEl);
    navInitialize()
})

sliderEl.addEventListener("click", function (event) {
    let currentSlide = getCurrentSlide();
    console.log(event.target.id);
    if (event.target.id === 'next') {
        nextSlide(currentSlide);
        checkButton(btnNextEl);
        checkButton(btnPrevEl);
    }
    else if (event.target.id === 'prev') {
        prevSlide(currentSlide);
        checkButton(btnNextEl);
        checkButton(btnPrevEl);
    }
    else if (event.target.className === 'nav') {
        displayNavImg(event.target.id);
    }
})