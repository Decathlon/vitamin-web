import { isFloat } from '../../../utils/math';

/**
 * Compute the vtmn-icon who has to be displayed on the position
 * @param {boolean} isCompact If the rating are compact
 * @param {number} currentRatingStarPosition Current position of the star on the component (range [1-5])
 * @param {number} ratingValue Value of the rating
 * @returns {'line'|'half-fill'|'fill'} Vtmn icon id
 */
export const computeRatingFill = (
  isCompact,
  currentRatingStarPosition,
  ratingValue,
) => {
  if (isCompact) {
    return ratingValue === 0 ? 'line' : 'fill';
  }
  if (currentRatingStarPosition <= ratingValue || 4.5 < ratingValue) {
    return 'fill';
  }
  if (
    ratingValue < currentRatingStarPosition &&
    isFloat(ratingValue) &&
    Math.ceil(ratingValue) === currentRatingStarPosition
  ) {
    return 'half-fill';
  }
  return 'line';
};
