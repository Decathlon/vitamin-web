import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/svelte';
import VtmnRating from '../VtmnRating.svelte';
import VtmnRatingWithSlots from './VtmnRatingWithSlots.svelte';

describe('VtmnRating', () => {
  const getRating = (container) =>
    container.getElementsByClassName('vtmn-rating')[0];
  const getInteractive = (container) =>
    container.getElementsByClassName('vtmn-rating--interactive')[0];
  const getCommentPrimary = (container) =>
    container.getElementsByClassName('vtmn-rating_comment--primary')[0];
  const getCommentSecondary = (container) =>
    container.getElementsByClassName('vtmn-rating_comment--secondary')[0];
  const getReadOnlyPresentations = (container) =>
    container.querySelectorAll('span[role="presentation"]');
  const getRadioInputs = (container) =>
    container.querySelectorAll('input[type="radio"]');

  const getPrimarySlot = (container) =>
    container.querySelector('[slot="primary"]');
  const getSecondarySlot = (container) =>
    container.querySelector('[slot="secondary"]');

  describe('Default', () => {
    test("Should have by default class 'vtmn-rating' + class 'vtmn-rating_size--medium' and not 'vtmn-rating_variant--brand' + aria-disabled", () => {
      const { container } = render(VtmnRating, { name: 'rating' });
      expect(getRating(container)).toHaveClass('vtmn-rating');
      expect(getRating(container)).toHaveClass('vtmn-rating_size--medium');
      expect(getRating(container)).not.toHaveClass(
        'vtmn-rating_variant--brand',
      );
      expect(getRating(container)).toHaveAttribute('aria-disabled', 'false');
    });
    test("Should have class 'vtmn-rating_size--medium' if size is medium", () => {
      const { container } = render(VtmnRating, {
        name: 'rating',
        size: 'medium',
      });
      expect(getRating(container)).toHaveClass('vtmn-rating_size--medium');
    });
    test("Should have class 'vtmn-rating_size--small' if size is small", () => {
      const { container } = render(VtmnRating, {
        name: 'rating',
        size: 'small',
      });
      expect(getRating(container)).toHaveClass('vtmn-rating_size--small');
    });
    test("Should not have class 'vtmn-rating_variant--brand' if emphasis is false", () => {
      const { container } = render(VtmnRating, {
        name: 'rating',
        emphasis: false,
      });
      expect(getRating(container)).not.toHaveClass(
        'vtmn-rating_variant--brand',
      );
    });
    test("Should have class 'vtmn-rating_variant--brand' if emphasis is true", () => {
      const { container } = render(VtmnRating, {
        name: 'rating',
        emphasis: true,
      });
      expect(getRating(container)).toHaveClass('vtmn-rating_variant--brand');
    });
    test('Should pass custom class to the vtmn-rating', () => {
      const { container } = render(VtmnRating, {
        name: 'rating',
        class: 'unit-test',
      });
      expect(getRating(container)).toHaveClass('unit-test');
    });
    test("Should have aria-disabled='true' if disabled", () => {
      const { container } = render(VtmnRating, {
        name: 'rating',
        disabled: true,
      });
      expect(getRating(container)).toHaveAttribute('aria-disabled', 'true');
    });
    test("Should not have a primary slot and class 'vtmn-rating_comment--primary'", () => {
      const { container } = render(VtmnRating, { name: 'rating' });
      expect(getCommentPrimary(container)).toBeUndefined();
      expect(getPrimarySlot(container)).toBeNull();
    });
    test("Should not have a secondary slot and class 'vtmn-rating_comment--secondary'", () => {
      const { container } = render(VtmnRating, { name: 'rating' });
      expect(getCommentSecondary(container)).toBeUndefined();
      expect(getSecondarySlot(container)).toBeNull();
    });
  });

  describe('ReadOnly', () => {
    test("Should not have 'vtmn-rating--interactive' if readOnly = true", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
      });
      expect(getInteractive(container)).toBeUndefined();
    });
    test("Should display primary slot and class 'vtmn-rating_comment--primary' if slot primary are set", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
      });
      expect(getCommentPrimary(container)).toBeVisible();
      expect(getPrimarySlot(container)).toBeVisible();
    });
    test("Should display secondary slot and class 'vtmn-rating_comment--secondary' if slot secondary are set", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
      });
      expect(getCommentSecondary(container)).toBeVisible();
      expect(getSecondarySlot(container)).toBeVisible();
    });

    test("Should have 1 span role 'presentation' if compact is true", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: true,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(1);
      expect(spans[0]).toBeVisible();
    });
    test("Should have 1 span with class 'vtmx-star-line' if rating = 0 and compact mode", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: true,
        rating: 0,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(1);
      expect(spans[0]).toBeVisible();
      expect(spans[0]).toHaveClass('vtmx-star-line');
    });
    test("Should have 1 span with class 'vtmx-star-half-fill' if rating = 0.1 and compact mode", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: true,
        rating: 0.1,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(1);
      expect(spans[0]).toBeVisible();
      expect(spans[0]).toHaveClass('vtmx-star-half-fill');
    });
    test("Should have 1 span with class 'vtmx-star-half-fill' if rating = 0.9 and compact mode", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: true,
        rating: 0.9,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(1);
      expect(spans[0]).toBeVisible();
      expect(spans[0]).toHaveClass('vtmx-star-half-fill');
    });
    test("Should have 1 span with class 'vtmx-star-fill' if rating = 1 and compact mode", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: true,
        rating: 1,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(1);
      expect(spans[0]).toBeVisible();
      expect(spans[0]).toHaveClass('vtmx-star-fill');
    });

    test("Should have 5 span with class 'vtmx-star-line' and compact = false by default", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: false,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(5);
      for (let i = 0, ii = spans.length; i < ii; i++) {
        expect(spans[i]).toBeVisible();
        expect(spans[i]).toHaveClass('vtmx-star-line');
      }
    });
    test("Should have 5 span with class 'vtmx-star-line' if rating = 0 and compact = false", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: false,
        rating: 0,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(5);
      for (let i = 0, ii = spans.length; i < ii; i++) {
        expect(spans[i]).toBeVisible();
        expect(spans[i]).toHaveClass('vtmx-star-line');
      }
    });
    test("Should have 2 span with class 'vtmx-star-fill' and 3 span with class 'vtmx-star-line' if rating = 2 and compact = false", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: false,
        rating: 2,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(5);
      for (let i = 0, ii = spans.length; i < ii; i++) {
        expect(spans[i]).toBeVisible();
      }
      expect(spans[0]).toHaveClass('vtmx-star-fill');
      expect(spans[1]).toHaveClass('vtmx-star-fill');
      expect(spans[2]).toHaveClass('vtmx-star-line');
      expect(spans[3]).toHaveClass('vtmx-star-line');
      expect(spans[4]).toHaveClass('vtmx-star-line');
    });
    test("Should have 2 span with class 'vtmx-star-fill' and 1 with class 'vtmx-star-half-fill' and 2 span with class 'vtmx-star-line' if rating = 2.1 and compact = false", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: false,
        rating: 2.1,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(5);
      for (let i = 0, ii = spans.length; i < ii; i++) {
        expect(spans[i]).toBeVisible();
      }
      expect(spans[0]).toHaveClass('vtmx-star-fill');
      expect(spans[1]).toHaveClass('vtmx-star-fill');
      expect(spans[2]).toHaveClass('vtmx-star-half-fill');
      expect(spans[3]).toHaveClass('vtmx-star-line');
      expect(spans[4]).toHaveClass('vtmx-star-line');
    });
    test("Should have 2 span with class 'vtmx-star-fill' and 1 with class 'vtmx-star-half-fill' and 2 span with class 'vtmx-star-line' if rating = 2.9 and compact = false", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: false,
        rating: 2.9,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(5);
      for (let i = 0, ii = spans.length; i < ii; i++) {
        expect(spans[i]).toBeVisible();
      }
      expect(spans[0]).toHaveClass('vtmx-star-fill');
      expect(spans[1]).toHaveClass('vtmx-star-fill');
      expect(spans[2]).toHaveClass('vtmx-star-half-fill');
      expect(spans[3]).toHaveClass('vtmx-star-line');
      expect(spans[4]).toHaveClass('vtmx-star-line');
    });
    test("Should have 5 span with class 'vtmx-star-fill' if rating = 5 and compact = false", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: true,
        compact: false,
        rating: 5,
      });
      const spans = getReadOnlyPresentations(container);
      expect(spans.length).toEqual(5);
      for (let i = 0, ii = spans.length; i < ii; i++) {
        expect(spans[i]).toBeVisible();
        expect(spans[i]).toHaveClass('vtmx-star-fill');
      }
    });
  });

  describe('Interactive', () => {
    test("Should not have 'vtmn-rating--interactive' if readOnly = false", () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
      });
      expect(getInteractive(container)).toBeVisible();
    });
    test('Should have 5 input type radio if readOnly = false', () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
      });
      const inputs = getRadioInputs(container);
      expect(inputs.length).toEqual(5);
      for (let i = 0, ii = inputs.length; i < ii; i++) {
        expect(inputs[i]).toBeVisible();
      }
    });
    test('Should have 5 input type radio if readOnly = false and compact = true', () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
        compact: true,
      });
      const inputs = getRadioInputs(container);
      expect(inputs.length).toEqual(5);
      for (let i = 0, ii = inputs.length; i < ii; i++) {
        expect(inputs[i]).toBeVisible();
      }
    });
    test('Should have 5 input type radio disabled if readOnly = false and disabled = true', () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
        disabled: true,
      });
      const inputs = getRadioInputs(container);
      expect(inputs.length).toEqual(5);
      for (let i = 0, ii = inputs.length; i < ii; i++) {
        expect(inputs[i]).toBeVisible();
        expect(inputs[i]).toHaveAttribute('disabled');
      }
    });
    test('Should have 5 input type radio with name if readOnly = false and name are set', () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
        disabled: true,
      });
      const inputs = getRadioInputs(container);
      expect(inputs.length).toEqual(5);
      for (let i = 0, ii = inputs.length; i < ii; i++) {
        expect(inputs[i]).toBeVisible();
        expect(inputs[i]).toHaveAttribute('name', 'rating');
      }
    });
    test('Should not have a slot primary if slot are defined', () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
      });
      expect(getCommentPrimary(container)).toBeUndefined();
      expect(getPrimarySlot(container)).toBeNull();
    });
    test('Should not have a slot secondary if slot are defined', () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
      });
      expect(getCommentPrimary(container)).toBeUndefined();
      expect(getPrimarySlot(container)).toBeNull();
    });
    test('Should radio inputs reactive to rating variable', async () => {
      const { container } = render(VtmnRatingWithSlots, {
        name: 'rating',
        readOnly: false,
      });

      expect(getInteractive(container)).toHaveAttribute('data-rating', '0');

      const inputs = getRadioInputs(container);
      for (let i = 0, ii = inputs.length; i < ii; i++) {
        expect(inputs[i].checked).toEqual(false);
      }
      await fireEvent.click(inputs[1]);
      expect(inputs[1].checked).toEqual(true);
      expect(getInteractive(container)).toHaveAttribute('data-rating', '2');
    });
  });
});
