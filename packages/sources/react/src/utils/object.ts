export const isObject = (object: object) => {
  return (
    typeof object === 'object' && !Array.isArray(object) && object !== null
  );
};

export const objectValuesToString = (object: object) => {
  if (!isObject(object)) {
    return {};
  }

  return JSON.parse(JSON.stringify(object), (_key, value) => {
    if (typeof value === 'boolean' || typeof value === 'number') {
      return value.toString();
    }
    return value;
  });
};
