const tip = document.querySelectorAll(".tip-item");
const tipTotal = document.querySelector(".tip-total");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
let percent = 15;

tip.forEach(n => n.addEventListener("click", () => {
    percent = parseFloat(n.textContent);
    tip.forEach(n => n.classList.remove("active"));
    n.classList.toggle("active");
    calculateTip()
}));

reset.addEventListener("click", () => {
    tipTotal.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
    document.querySelector("#bill").value = 0;
    document.querySelector("#people").value = 0;
})

function calculateTip() {
    const bill = +document.querySelector("#bill").value;
    const people = +document.querySelector("#people").value;
    if(bill === 0 || people === 0){
        tipTotal.innerHTML = '$0.00';
        total.innerHTML = '$0.00';
        reset.classList.add("active")
    }else{
        reset.classList.remove("active");
        tipTotal.innerHTML = `$${(bill / people * percent / 100).toFixed(2)}`
        total.innerHTML = `$${((bill / people + bill / people * percent / 100)).toFixed(2)}`
    }   
}

function calculateTipCustom() {
    const bill = +document.querySelector("#bill").value;
    const people = +document.querySelector("#people").value;
    const custom = +document.querySelector("#custom").value
    percent = custom;
    if(bill === 0 || people === 0){
        tipTotal.innerHTML = '$0.00';
        total.innerHTML = '$0.00';
    }else{
        tipTotal.innerHTML = `$${(bill / people * percent / 100).toFixed(2)}`
        total.innerHTML = `$${((bill / people + bill / people * percent / 100)).toFixed(2)}`
    } 
}

function removeActive() {
    tip.forEach(n => n.classList.remove("active"));
}

