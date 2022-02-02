const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("err X_X");
  },
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 1000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, req) => {
      setTimeout(() => {
        res(age);
      }, 2000);
    });
  },
};

module.exports = fn;
