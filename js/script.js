let btnEl = document.getElementById('random-btn');
let imgEl = document.getElementById('random-img');

btnEl.addEventListener("click", function () {

    let randomNum = Math.floor(Math.random() * 10) + 1;
    imgEl.src = `img/${randomNum}.jpg`;
});
