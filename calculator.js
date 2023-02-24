const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const add = document.getElementById('add-btn');
const subtract = document.getElementById('subtract-btn');
const multiply = document.getElementById('multiply-btn');
const divide = document.getElementById('divide-btn');

const results = document.getElementById('result');


add.addEventListener('click', executeOperation);
subtract.addEventListener('click', executeOperation);
multiply.addEventListener('click', executeOperation);
divide.addEventListener('click', executeOperation);
divide.addEventListener('click', executeOperation);

const template = {valor1: null, valor2: null, operator: null};

const handler = {
    get: (target, key) => {
        if(key === 'valor1'){
            return input1.value === '' ? 0 : parseInt(input1.value);
        }

        if(key === 'valor2'){
            return input2.value === '' ? 0 : parseInt(input2.value);
        }
        return target[key];
    }
}

const proxy = new Proxy(template, handler);

function calculateResult() {
    let total;
    switch(proxy.operator){
        case '+':
            total = proxy.valor1 + proxy.valor2;
            break;
        case '*':
            total = proxy.valor1 * proxy.valor2;
            break;
        case '-':
            total = proxy.valor1 - proxy.valor2;
            break;
        case '/':
            total = proxy.valor1 / proxy.valor2;
            break;
    }
    results.innerText = total.toFixed(2);
}

function executeOperation(event){
    proxy.operator = event.target.innerText;
    calculateResult();
}