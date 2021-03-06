class Stack {
  constructor({ size = 1, unlimited = false }) {
    if (Number.isNaN(size)) {
      throw new Error('Size has to be a number');
    }

    this.size = size;
    this.unlimited = unlimited;
    this.top = 0;
    this.stack = [];
  }

  push(value = '') {
    if (!this.unlimited && this.top === this.size) {
      throw new Error('Stack Overflow');
    }

    this.top = this.stack.push(value);

    return this;
  }

  pop() {
    if (this.top === 0) {
      throw new Error('Stack Underflow');
    }

    const value = this.stack.pop();
    this.top -= 1;

    return value;
  }
}

module.exports = Stack;
