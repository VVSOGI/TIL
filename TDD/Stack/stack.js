class Stack {
  constructor() {
    this.list = [];
    this._size = 0;
    this.head = null;
  }

  present() {
    return this.list;
  }

  push(element) {
    this.list.push(element);
    return this;
  }

  pop() {
    if (this.list.length === 0) {
      throw new Error('error');
    }
    this.list.pop();
    return this;
  }
}

module.exports = Stack;
