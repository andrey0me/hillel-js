let pEl = document.getElementById('color-p');
let btnEl = document.getElementById('color-btn');
pEl.classList.add('p-js');
btnEl.classList.add('btn-js');

btnEl.addEventListener("click", function (event) {
    pEl.classList.toggle('change');
}
);