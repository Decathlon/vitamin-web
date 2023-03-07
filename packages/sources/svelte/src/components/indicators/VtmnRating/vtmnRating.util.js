import { isFloat, roundToNearestHalf } from '../../../utils/math';

/**
 * Compute the vtmn-icon who has to be displayed on the position
 * @param {boolean} isCompact If the rating is compact
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

  const computedRating = roundToNearestHalf(ratingValue);
  if (currentRatingStarPosition <= computedRating) {
    return 'fill';
  }
  return Math.ceil(computedRating) === currentRatingStarPosition &&
    isFloat(computedRating)
    ? 'half-fill'
    : 'line';
};
