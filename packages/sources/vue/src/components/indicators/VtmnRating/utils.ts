import { isFloat, roundToNearestHalf } from '../../../utils/math';

/**
 * Compute the vtmn-icon who has to be displayed on the position
 * @param {number} currentRatingStarPosition Current position of the star on the component (range [1-5])
 * @param {number} ratingValue Value of the rating
 * @returns {'line'|'half-fill'|'fill'} Vtmn icon id
 */
export const computeRatingFill = (
  currentRatingStarPosition: number,
  ratingValue: number,
) => {
  const computedRating = roundToNearestHalf(ratingValue);
  if (currentRatingStarPosition <= computedRating) {
    return 'star-fill';
  }
  return Math.ceil(computedRating) === currentRatingStarPosition &&
    isFloat(computedRating)
    ? 'star-half-fill'
    : 'star-line';
};
