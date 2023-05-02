const add = (a: number, b: number) => {
  return a + b;
};

test('basic', () => {
  expect(add(3, 4)).toBe(7);
});
