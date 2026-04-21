/**
 * @function
 * @param value The array value that you want to check.
 * @param valid The valid array that will be used to check your value.
 * @returns Returns a boolean that depends on whether the value is equal to the valid value.
 * - `true` if it's valid.
 * - `false` if it's not valid.
 * @example
 * ```js
 * const { isSameArray } = require("aniki");
 *
 * let array1 = ["a", "b", "c"];
 * let array2 = ["x", "y", "z"];
 *
 * isSameArray(array1, array2); // return false, they are not the same.
 *
 * isSameArray(array2, array2); // return true, they are the same.
 *
 * function getArray(array) {
 *  const validArray = ["blabla", "bleble"];
 *
 *  if (!isSameArray(array, validArray)) throw new TypeError("Invalid value(s)!");
 *
 *  return array;
 *  // ...
 * }
 * ```
 * @since 1.4.0
 */
declare function isSameArray(value: unknown[], valid: unknown[]): boolean;

/**
 * @function
 * @param value Any value that has one of those following operators: `<=`, `>=`, `>`, `<`, `!=`, `=`
 * @returns Returns a boolean that depends on whether the value has a valid operator.
 * - `true` if it's valid.
 * - `false` if it's not valid.
 * @example
 * ```js
 * const { isOperatorValid } = require("aniki");
 *
 * isOperatorValid("AAA"); // return false, no valid operator + NaN.
 * isOperatorValid("1000.1"); // return false, no valid operator + not an integer.
 * isOperatorValid("<=1000.1"); // return false, valid operator but not an integer.
 *
 * isOperatorValid("1011"); // return true, no operator but is a number.
 * isOperatorValid("=1000"); // return true, has a valid operator.
 * ```
 * @since 2.0.0-beta.1
 */
declare function isOperatorValid(value: string): boolean;

export { isOperatorValid, isSameArray };
