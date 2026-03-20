function isSameArray(value, valid) {
  if (!value) throw new ReferenceError("'value' must be specified.");
  if (!valid) throw new ReferenceError("'valid' must be specified.");

  if (!Array.isArray(value)) throw new TypeError("'value' must be an array.");
  if (!Array.isArray(valid)) throw new TypeError("'valid' must be an array.");

  const invalidCategories = value.filter((c) => !valid.includes(c));

  if (invalidCategories.length > 0) return false;

  return true;
}

function isOperatorValid(value) {
  if (typeof value === "number" && Number.isInteger(value) === true)
    return true;

  if (typeof value !== "string") return false;

  const regex = /^(<=|>=|>|<|!=|=)?\d+$/;
  return regex.test(value);
}

module.exports = { isSameArray, isOperatorValid };
