/**
 * Transform an object to a string style
 * @param {*} object
 * @returns {string}
 */
export const objectToStyle = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
