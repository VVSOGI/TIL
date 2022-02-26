const forEach = require('../mock');

const mockCallback = jest.fn((item) => item + 42);

beforeEach(() => {
  forEach([0, 1], mockCallback);
});

test('The mock function is called twice', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test('The first argument of the first call to the function was 0', () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

test('The first argument of the second call to the function was 1', () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('The return value of the first call to the function was 42', () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});

const myMock = jest.fn();
const a = new myMock();
const blue = { a: 15, b: 30 };
const bound = myMock.bind(blue);
bound(); // binding 가능

const Mock = jest.fn();
console.log(Mock());

Mock.mockReturnValueOnce(20) //
  .mockReturnValueOnce(10)
  .mockReturnValue(true);

console.log(Mock(), Mock(), Mock(), Mock());

// mockReturnValueOnce는 만든 목 함수의 리턴 값을 한번 정해준다.
// mockReturnValue는 만든 목 함수의 리턴 값을 항상 정해준다.

const filterTestFn = jest.fn();

test('The return value of the second call to the function was false', () => {
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => filterTestFn(num));

  console.log(result); // > [11]
  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
  expect(filterTestFn.mock.results[1].value).toBe(false);
});
