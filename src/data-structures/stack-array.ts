// 使用数组来模拟栈结构

export default class StackArray<T> {
  list: Array<T>;
  constructor() {
    this.list = [];
  }
  push(...args: Array<T>) {
    this.list.push(...args);
  }
  pop() {
    return this.list.pop();
  }
  peek() {
    return this.list[this.list.length - 1];
  }
  isEmpty() {
    return this.list.length === 0;
  }
  clear() {
    this.list = [];
  }
  size() {
    return this.list.length;
  }
}
