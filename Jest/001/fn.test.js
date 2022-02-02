const fn = require("./fn");

// test("1 + 1 equal 2", () => {
//   expect(fn.add(1, 1)).toBe(2);
// });

// test("2 + 3 equal 5", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3 + 3 Not equal 5", () => {
//   expect(fn.add(3, 3)).not.toEqual(5);
// });

// test("Return object use MakeUser Fn Deliver Name and Age ", () => {
//   expect(fn.makeUser("coder", 20)).toEqual({ name: "coder", age: 20 });
// });

// test("Return object use MakeUser Fn Deliver Name and Age ", () => {
//   expect(fn.makeUser("coder", 20)).toStrictEqual({
//     name: "coder",
//     age: 20,
//     gender: undefined,
//   });
// });

// test("null is null", () => {
//   expect(null).toBeNull();
// });

// test("0 equal falsy", () => {
//   expect(fn.add(1, -1)).toBeFalsy();
// });

// test("ID is small then 10", () => {
//   const id = "SIMPLE_ID";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

// test("password 4 length", () => {
//   const pw = "1234";
//   expect(pw.length).toEqual(4);
// });

// test("0.1 + 0.2 == 0.3", () => {
//   expect(0.1 + 0.2).toBeCloseTo(0.3);
// });

// test("A is not in hello world", () => {
//   expect("hello world").not.toEqual(/a/);
// });

// test("is Tom in List?", () => {
//   const List = ["Mike", "Tom", "Jason"];
//   const find = "Tom";
//   expect(List).toContain(find);
// });

// test("Is this error?", () => {
//   expect(() => fn.throwErr()).toThrow("err X_X");
// });

// test("callback Name Mike after 1 sec", (done) => {
//   const callback = (name) => {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (e) {
//       console.error(e);
//       done();
//     }
//     // done();
//   };
//   fn.getName(callback);
// });

// test("callback age 30 after 2sec", async () => {
//   await expect(fn.getAge()).resolves.toBe(30);
// });

// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("함수는 두 번 호출된다. ", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

const mockFn = jest.fn((num) => num);

// const forEachAdd1 = (arr) => {
//   arr.forEach((item) => {
//     mockFn(item + 1);
//   });
// };

// test("should ", () => {
//   forEachAdd1([10, 20, 30]);
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("should ", () => {
//   const mockArr = mockFn.mock.results;
//   mockArr.forEach((mock, index) => {
//     expect(mock.value).toBe(10 * (index + 2));
//   });
//   //   expect(mockFn.mock.calls.length).toBe(3);
// });

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();

test("should ", () => {
  console.log(mockFn.mock.results);
  expect("dd").toBe("dd");
});
