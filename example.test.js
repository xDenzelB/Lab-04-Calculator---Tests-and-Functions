import { add } from './math-utils.js';
import { subtract } from './math-utils.js';
import { multiply } from './math-utils.js';
import { divide } from './math-utils.js';

const test = QUnit.test;

test('add() should take in 1 and 1 and return 2', (expect) => {
    const expected = 2;

    const actual = add(1, 1);

    expect.equal(actual, expected);

});

const test = QUnit.test;

test('subtract() should take in 1 and 1 and return 0', (expect) => {
    const expected = 0;

    const actual = subtract(1, 1);

    expect.equal(actual, expected);
});
const test = QUnit.test;

test('multiply() should take in 2 and 2 and return 4', (expect) => {
    const expected = 0;

    const actual = multiply(2, 2);

    expect.equal(actual, expected);
});
const test = QUnit.test;

test('divide() should take in 1 and 1 and return 0', (expect) => {
    const expected = 0;

    const actual = divide(1, 1);

    expect.equal(actual, expected);
});