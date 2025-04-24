let formEl = document.getElementById("cb-form");
let nameEl = document.getElementById("cb-name");
let msgEl = document.getElementById("cb-msg");
let phoneEl = document.getElementById("cb-phone");
let emailEl = document.getElementById("cb-email");

const msg = {
    name: {
        error: 'Enter the name',
    },
    email: {
        error: 'Enter the valid email',
    },
    message: {
        error: 'Enter the valid message',
    },
    phone: {
        error: 'Enter the valid phone',
    }
}

function addInputErrorMessage(inputEl, msg) {
    let errEl = inputEl;

    if (!document.getElementById('err-msg-' + inputEl.id)) {
        errEl.classList.add('not-valid');
        let errDiv = document.createElement('div');
        errDiv.className = 'err-msg';
        errDiv.id = 'err-msg-' + inputEl.id;
        errDiv.textContent = msg;
        inputEl.insertAdjacentElement('afterend', errDiv);
    }

}

function removeInputErrorMessage(inputEl) {
    let msgEl = inputEl;
    if (document.getElementById('err-msg-' + inputEl.id)) {
        msgEl.classList.remove('not-valid');
        let errDiv = document.getElementById('err-msg-' + inputEl.id);
        errDiv.remove();
    }
}

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    let isFormValid = false;

    if (nameEl.value === '') {
        isFormValid = false;
        addInputErrorMessage(nameEl, msg.name.error);
    }
    else {
        isFormValid = true;
        removeInputErrorMessage(nameEl);
    }

    if ((msgEl.value.length) < 5) {
        isFormValid = false;
        addInputErrorMessage(msgEl, msg.message.error);
    }
    else {
        isFormValid = true;
        removeInputErrorMessage(msgEl);
    }

    if (!phoneEl.value.startsWith("+380")) {
        isFormValid = false;
        addInputErrorMessage(phoneEl, msg.phone.error);
    }
    else {
        isFormValid = true;
        removeInputErrorMessage(phoneEl);
    }

    if (!(emailEl.value.includes("@") && emailEl.value.includes("."))) {
        isFormValid = false;
        addInputErrorMessage(emailEl, msg.email.error);
    }
    else {
        isFormValid = true;
        removeInputErrorMessage(emailEl);
    }

    if (isFormValid) {
        const formData = new FormData(formEl);
        
        /*текст*/ 
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
          }

        /*json*/
        console.log(JSON.stringify(Object.fromEntries(formData)));
    }
})

formEl.addEventListener("input", function (event) {
    removeInputErrorMessage(document.getElementById(event.target.id));
})