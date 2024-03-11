<<<<<<< HEAD
const add = require('../add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(add(1, add(2, 3))).toBe(6);
});
=======
const add = require('../add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(add(1, add(2, 3))).toBe(6);
});
>>>>>>> 11d7a2a16e144d768b5b93d9e0d022fd95da86d9
