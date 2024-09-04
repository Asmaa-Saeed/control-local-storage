const inputEl = document.querySelector('.the-input');
const allSpans = document.querySelectorAll('.buttons span');
const resultEl = document.querySelector('.results > span');



allSpans.forEach(span => {
    span.addEventListener('click', (e) =>{
        if(e.target.classList.contains("check-item")) {
            checkItem();
        }else if (e.target.classList.contains("add-item")) {
            addItem();
        }else if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }else if (e.target.classList.contains("show-item")) {
            showItem();
        }
    });
});





function showInputStatus() {
        resultEl.innerHTML = 'Input cannot be empty';
};

function checkItem() {
    let inputValue = inputEl.value;
    if (inputValue !== '') {
        if (localStorage.getItem(inputValue)) {
            resultEl.innerHTML = `Found Local Storage Item Called <span> ${inputValue}</span>`;
            inputEl.value = '';
        } else {
            resultEl.innerHTML = `Not Found Local Storage Item With The Name <span> ${inputValue}</span>`;
            inputEl.value = '';
        }
    } else {
    showInputStatus();
}
};

function addItem() {
    let inputValue = inputEl.value;
    if (inputValue !== '') {
        localStorage.setItem(inputValue, "test");
        resultEl.innerHTML = `Local Storage Item with Name <span> ${inputValue}</span> Added successfully!`;
        inputEl.value = '';
    } else {
    showInputStatus();
}
}

function deleteItem() {
    let inputValue = inputEl.value;
    if (inputValue !== '') {
        if(localStorage.getItem(inputValue)){
            localStorage.removeItem(inputValue);
            resultEl.innerHTML = `Local Storage Item with Name <span> ${inputValue} </span> deleted successfully!`;
            inputEl.value = '';
        }else {
            resultEl.innerHTML = `Not Found Local Storage Item With The Name <span> ${inputValue} </span>`;
            inputEl.value = '';
        }
    } else {
    showInputStatus();
}
}

function showItem() {
    if (localStorage.length) {
        resultEl.innerHTML = '';
        for (let [key, value] of Object.entries(localStorage)) {
            resultEl.innerHTML += `<span class="keys">${key}</span>`;
        }
    }else {
        resultEl.innerHTML = `The Local Storage Is Empty!`;
    }
}



