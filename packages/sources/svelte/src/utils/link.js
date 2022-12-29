/**
 * Compute the rel and add noopener and noreferrer if target are _blank
 * https://thecodest.co/blog/web-app-security-target-_blank-vulnerability/
 * @param target
 * @param rel
 * @returns {string|*}
 */
export const computeRel = (target, rel) =>
  target === '_blank'
    ? Array.from(new Set(rel).add('noopener').add('noreferrer'))
        .join(' ')
        .trim()
    : rel;
