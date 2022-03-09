export function isFloat(n) {
  return n === +n && n !== (n | 0);
}

export function isInteger(n) {
  return n === +n && n === (n | 0);
}
