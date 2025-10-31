function isSameArray(value, valid) {
  if (!Array.isArray(value))
    throw new TypeError(
      `'value' (actual type: ${typeof value}) must be an array.`
    );
  if (!Array.isArray(valid))
    throw new TypeError(
      `'valid' (actual type ${typeof valid}) must be an array.`
    );

  const invalidCategories = value.filter((c) => !valid.includes(c));

  if (invalidCategories.length > 0) return false;

  return true;
}

module.exports = { isSameArray };
