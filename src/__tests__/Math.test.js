import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  const value1 = 2; 
  const value2 = 1; // Arrange


  const result = Add(value1, value2); // Act


  expect(result).toBe(3);
}); // Assert


test('Return substraction of a - b', () => {
  const value1 = 2;
  const value2 = 1; // Arrange


  const result = Substract(value1, value2); // Act


  expect(result).toBe(1);
}); // Assert


test('Return multiplication of two arguments', () => {
  const value1 = 2;
  const value2 = 1; // Arrange


  const result = Multiplication(value1, value2); // Act


  expect(result).toBe(2);
}); // Assert