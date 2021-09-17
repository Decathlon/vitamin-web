/**
 * @typedef {false|undefined|null|''|0|NaN} FalsyValue
 */

/**
 * Concat all classNames, remove falsy or empty ones.
 * @param {(string|FalsyValue)[]} classNames
 * @returns {string}
 */
export const cn = (...classNames) => classNames.filter(Boolean).join(' ');
