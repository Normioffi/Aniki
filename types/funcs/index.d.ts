/**
 * @function
 * @param value - The array value that you want to check.
 * @param valid - The valid array that you want to use to check if the value is valid.
 * @returns Return a boolean if the two arrays are the same yes or not., **true** if valid, **false** if not valid.
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

export { isSameArray };
