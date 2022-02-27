const Calculator = require('../calculator.js');

let calc;

beforeEach(() => {
  calc = new Calculator();
});

test('set function', () => {
  expect(calc.set(5).value).toBe(5);
});

test('claer function', () => {
  expect(calc.clear().value).toBe(0);
});

test('add function', () => {
  expect(calc.add(5).value).toBe(5);
});

test('add funcion more 100 to be error', () => {
  expect(() => calc.add(105)).toThrowError('Value can not be greater than 100');
});

test('substract function', () => {
  expect(calc.subtract(3).value).toBe(-3);
});

test('multiply function', () => {
  expect(calc.multiply(10).value).toBe(0);
});

test('divide function', () => {
  expect(calc.divide(5).value).toBe(0);
});
