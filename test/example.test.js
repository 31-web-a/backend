import { suma } from './example.js';

test('prueba 1 + 1', () => {
  expect(suma(1, 2)).toBe(3);
});

test('ambos 0', () => {
  expect(suma(0, 0)).toBe(0);
});
