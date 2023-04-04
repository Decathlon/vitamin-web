/**
 * Transform an object to a string style
 * @param {*} object
 * @returns {string}
 */
export const objectToStyle = (obj) =>
  Object.entries(obj)
    .filter(([, value]) => value != undefined)
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
