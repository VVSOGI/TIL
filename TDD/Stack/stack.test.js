const Stack = require('./stack');

describe('Make Stack LIFO destructure', () => {
  let TestStack;
  beforeEach(() => {
    TestStack = new Stack();
  });

  test('Doing anything equal empty list', () => {
    const present = TestStack.present();
    expect(present).toEqual([]);
  });

  test('Doing push 15 in present list is [15]', () => {
    const present = TestStack.push(15).present();
    expect(present).toEqual([15]);
  });

  test('Doing push 15, 30, 45 in present list is [15, 30, 45]', () => {
    const present = TestStack.push(15) //
      .push(30)
      .push(45)
      .present();
    expect(present).toEqual([15, 30, 45]);
  });

  test('Doing pop method after push 15, 30 is [15]', () => {
    const present = TestStack.push(15) //
      .push(30)
      .pop()
      .present();
    expect(present).toEqual([15]);
  });

  test('If doing pop on empty list is throw error', () => {
    expect(() => TestStack.pop()).toThrowError('error');
  });
});
