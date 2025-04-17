let btnPromptEl = document.getElementById('prompt-btn');
let btnRedirectEl = document.getElementById('redirect-btn');

let httpLink = '';

btnPromptEl.addEventListener("click", function (event) {
    httpLink = prompt('Введіть посилання');
});

btnRedirectEl.addEventListener("click", function (event) {
    document.location.href = httpLink;
});
