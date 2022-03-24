export const objectValuesToString = (object: object) =>
  Object.keys(object).map((key) => object[key].toString());
