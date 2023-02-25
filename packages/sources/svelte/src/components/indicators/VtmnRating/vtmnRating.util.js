import { isFloat } from '../../../utils/math';

/**
 * Compute the vtmn-icon who has to be displayed on the position
 * @param isCompact if the rating are compact
 * @param currentRatingStarPosition current position of the star
 * @param ratingValue value of the rating
 * @returns {string} icon id
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
