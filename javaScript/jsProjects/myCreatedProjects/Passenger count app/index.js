let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    saveEl.textContent += " - " + count;
    console.log(count);
}


