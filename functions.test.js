const countEvens=require('./functions').countEvens;

test('countEvens counts the number of even numbers in an array', () => {
  expect(countEvens([1, 2, 3, 4, 5, 6])).toBe(3);
});
test('countEvens returns 0 for an array with no even numbers', () => {
  expect(countEvens([1, 3, 5, 7])).toBe(0);
});
test('countEvens returns 0 for an empty array', () => {
  expect(countEvens([])).toBe(0);
});
 
