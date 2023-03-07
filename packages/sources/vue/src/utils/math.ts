export function isFloat(n: number) {
  return n === +n && n !== (n | 0);
}

export function roundToNearestHalf(number: number) {
  return Math.round(number * 2) / 2;
}
