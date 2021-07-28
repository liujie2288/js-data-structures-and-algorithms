import StackArray from "./stack-array";

test("StackArray",function(){
  const stack = new StackArray<number>();
  expect(stack.size()).toBe(0)
})
