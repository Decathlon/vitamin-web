export function format(first: string, last: string): string {
  return (first || '') + (typeof last !== 'undefined' ? ` ${last}` : '');
}
