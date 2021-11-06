import { add } from './math-utils.js';
import { subtract } from './math-utils.js';
import { multiply } from './math-utils.js';
import { divide } from './math-utils.js';



const addInput1 = document.getElementById('input-add-1');
const addInput2 = document.getElementById('input-add-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

console.log(addInput1);
console.log(addInput2);
console.log(addButton);
console.log(addResult);


addButton.addEventListener('click', () => {

    const addNumber1 = +addInput1.value;
    const addNumber2 = +addInput2.value;

    const result = add(addNumber1, addNumber2);

    addResult.textContent = result; 

});
const subtractInput1 = document.getElementById('input-subtract-1');
const subtractInput2 = document.getElementById('input-subtract-2');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

console.log(subtractInput1);
console.log(subtractInput2);
console.log(subtractButton);
console.log(subtractResult);


subtractButton.addEventListener('click', () => {

    const subNumber1 = subtractInput1.subtractNumber.valueAsNumber;
    const subNumber2 = subtractInput2.subtractNumber.valueAsNumber;

    const result = subtract(subNumber1, subNumber2);

    subtractResult.textContent = result; 

});
const multiplyInput1 = document.getElementById('input-multiply-1');
const multiplyInput2 = document.getElementById('input-multiply-2');
const multiplyButton = document.getElementByI('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

console.log(multiplyInput1);
console.log(multiplyInput2);
console.log(multiplyButton);
console.log(multiplyResult);


multiplyButton.addEventListener('click', () => {

    const mulNumber1 = multiplyInput1.valueAsNumber;
    const mulNumber2 = multiplyInput2.valueAsNumber;

    const result = multiply(mulNumber1, mulNumber2);

    multiplyResult.textContent = result; 

});
const divideInput1 = document.getElementById('input-divide-1');
const divideInput2 = document.getElementById('input-divide-2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

console.log(divideInput1);
console.log(divideInput2);
console.log(divideButton);
console.log(divideResult);


divideButton.addEventListener('click', () => {

    const divNumber1 = divideInput1.valueAsNumber;
    const divNumber2 = divideInput2.valueAsNumber;

    const result = divide(divNumber1, divNumber2);

    divideResult.textContent = result; 

});
