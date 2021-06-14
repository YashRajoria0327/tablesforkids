// math tables

let numberEl =document.querySelector('#req-number');
numberEl.addEventListener('keyup',function(){
    let theNumber = Number(numberEl.value);
    document.querySelector('#number').innerText = theNumber;
    calculate();
});

// range selector

let rangeEl =document.querySelector('#multiplier');
rangeEl.addEventListener('input',function(){
    let selectmulti = Number(rangeEl.value);
    document.querySelector('#multi').innerText = selectmulti;
    calculate();
});

// calculate
let calculate = () =>{
    let theNumber = Number(document.querySelector('#number').innerText);
    let multiplier = Number(document.querySelector('#multi').innerText);
    let mathResult = theNumber * multiplier;
    document.querySelector('#result').innerText = mathResult;
}