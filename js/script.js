let divEl = document.getElementById('button-box');

divEl.addEventListener("click", function (event) {
    console.log(event);

    if (event.target.tagName === 'BUTTON') {
        alert(`Клікнуто на кнопці: ${event.target.innerText}`)
    }
});
