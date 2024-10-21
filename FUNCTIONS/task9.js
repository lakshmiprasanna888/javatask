// Calculator functions

/**
 * Adds two numbers.
 * @param {number} num1 - 6
 * @param {number} num2 - 4
 * @returns {number} The sum of num1 and num2.
 */
function add(num1, num2) {
    return num1 + num2;
  }
  
  /**
   * Subtracts num2 from num1.
   * @param {number} num1 - 6
   * @param {number} num2 - 4
   * @returns {number} The difference of num1 and num2.
   */
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  /**
   * Multiplies two numbers.
   * @param {number} num1 - 6
   * @param {number} num2 - 4
   * @returns {number} The product of num1 and num2.
   */
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  /**
   * Divides num1 by num2.
   * @param {number} num1 - 10
   * @param {number} num2 - 2
   * @returns {number} The quotient of num1 and num2.
   * @throws {Error} If num2 is zero.
   */
  function divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  }
  
  /**
   * Computes the modulus (remainder) of num1 divided by num2.
   * @param {number} num1 - 10
   * @param {number} num2 - 4 
   * @returns {number} The remainder of num1 divided by num2.
   * @throws {Error} If num2 is zero.
   */
  function modulus(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 % num2;
  }
  
  