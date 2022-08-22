import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import VtmnProgressbar from '../VtmnProgressbar.svelte';

describe('VtmnProgressbar', () => {
  describe('Linear', () => {
    const getProgressLinear = (container) =>
      container.getElementsByClassName('vtmn-progressbar_container')[0];
    const getProgressLinearIndicator = (container) =>
      container.getElementsByClassName('vtmn-progressbar_indicator')[0];
    const getProgressLinearLabel = (container) =>
      container.getElementsByClassName('vtmn-progressbar_label')[0];
    const getProgressLinearSpan = (container) =>
      container.querySelector('.vtmn-progressbar_label > span');
    test('Should display a linear progressbar medium', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
      });
      expect(getProgressLinear(container)).toHaveClass(
        'vtmn-progressbar_size--medium',
      );
      expect(getProgressLinear(container)).not.toHaveClass(
        'vtmn-progressbar--indeterminate',
      );
    });
    test('Should apply custom class', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
        class: 'custom-class',
      });
      expect(getProgressLinear(container)).toHaveClass('custom-class');
    });
    test('Should display progressbar with size small', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
        size: 'small',
      });
      expect(getProgressLinear(container)).toHaveClass(
        'vtmn-progressbar_size--small',
      );
    });
    test('Should display progressbar with size large', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
        size: 'large',
      });
      expect(getProgressLinear(container)).toHaveClass(
        'vtmn-progressbar_size--large',
      );
    });
    test('Should display the label', () => {
      const { getByText } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
        label: 'unit-test',
      });
      expect(getByText('unit-test')).toBeVisible();
    });
    test('Should apply the correct progress value', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
        label: 'unit-test',
      });
      expect(getProgressLinear(container)).toHaveAttribute(
        'aria-valuenow',
        '30',
      );
      expect(getProgressLinearIndicator(container)).toHaveAttribute(
        'style',
        '--vtmn-progressbar_progress-transform:translateX(-70%)',
      );
    });
    test('Should apply an indeterminate value', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
        label: 'unit-test',
        indeterminate: true,
      });
      expect(getProgressLinearIndicator(container)).toHaveAttribute(
        'x2',
        '100%',
      );
      expect(getProgressLinear(container)).not.toHaveAttribute('aria-valuenow');
      expect(getProgressLinear(container)).toHaveClass(
        'vtmn-progressbar--indeterminate',
      );
      expect(getProgressLinearLabel(container)).toBeUndefined();
    });
    test('Should have an aria-labelledby linked with the id of the text', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'linear',
        progress: 30,
        label: 'unit-test',
        labelId: 'aria-label-unit-test',
      });
      expect(getProgressLinear(container)).toHaveAttribute(
        'aria-labelledby',
        'aria-label-unit-test',
      );
      expect(getProgressLinearSpan(container)).toHaveAttribute(
        'id',
        'aria-label-unit-test',
      );
    });
  });
  describe('Circular', () => {
    const getProgressCircular = (container) =>
      container.getElementsByClassName('vtmn-progressbar_variant--circular')[0];
    const getProgressCircularImg = (container) =>
      container.getElementsByClassName('vtmn-progressbar_image')[0];
    const getProgressCircularLabel = (container) =>
      container.getElementsByClassName('vtmn-progressbar_label')[0];
    const getProgressCircularTrack = (container) =>
      container.getElementsByClassName('vtmn-progressbar_track')[0];
    const getProgressCircularIndicator = (container) =>
      container.getElementsByClassName('vtmn-progressbar_indicator')[0];

    test('Should display a circular progressbar medium without track and img', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
      });
      expect(getProgressCircular(container)).toHaveClass(
        'vtmn-progressbar_container',
      );
      expect(getProgressCircular(container)).not.toHaveClass(
        'vtmn-progressbar--indeterminate',
        'vtmn-progressbar_size--small',
      );
      expect(getProgressCircularImg(container)).toBeUndefined();
      expect(getProgressCircularLabel(container)).toBeUndefined();
      expect(getProgressCircularTrack(container)).toBeUndefined();
      expect(getProgressCircularIndicator(container)).toBeVisible();
    });
    test('Should set correct values on element if size = medium', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        size: 'medium',
        track: true,
      });
      expect(getProgressCircularTrack(container)).toHaveAttribute('r', '64');
      expect(getProgressCircularIndicator(container)).toHaveAttribute(
        'r',
        '64',
      );
      expect(getProgressCircularIndicator(container)).toHaveAttribute(
        'stroke-dashoffset',
        '280',
      );
    });
    test('Should set correct values on element if size = small', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        size: 'small',
        track: true,
      });
      expect(getProgressCircularTrack(container)).toHaveAttribute('r', '32');
      expect(getProgressCircularIndicator(container)).toHaveAttribute(
        'r',
        '32',
      );
      expect(getProgressCircularIndicator(container)).toHaveAttribute(
        'stroke-dashoffset',
        '140',
      );
    });
    test('Should apply custom class', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        class: 'custom-class',
      });
      expect(getProgressCircular(container)).toHaveClass('custom-class');
    });
    test('Should display progressbar with size small', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        size: 'small',
      });
      expect(getProgressCircular(container)).toHaveClass(
        'vtmn-progressbar_size--small',
      );
    });
    test('Should display the label if label are true', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        label: true,
      });
      expect(getProgressCircularLabel(container)).toBeVisible();
    });
    test('Should display a track if track are true', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        track: true,
      });
      expect(getProgressCircularTrack(container)).toBeVisible();
    });
    test('Should hide progress indicator if indeterminate are true', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        indeterminate: true,
      });
      expect(getProgressCircularLabel(container)).toBeUndefined();
      expect(getProgressCircular(container)).not.toHaveAttribute(
        'aria-valuenow',
      );
      expect(getProgressCircularIndicator(container)).toHaveAttribute(
        'stroke-dashoffset',
        '0',
      );
    });
    test('Should apply img if img are set', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        indeterminate: true,
        img: 'example.com',
        imgAlt: 'unit-test',
      });
      expect(getProgressCircularImg(container)).toBeVisible();
      expect(getProgressCircularImg(container)).toHaveAttribute(
        'src',
        'example.com',
      );
      expect(getProgressCircularImg(container)).toHaveAttribute(
        'alt',
        'unit-test',
      );
    });
    test('Should set progress correctly on all elements', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        label: true,
      });
      expect(getProgressCircular(container)).toHaveAttribute(
        'aria-valuenow',
        '30',
      );
      expect(getProgressCircularIndicator(container)).toHaveAttribute(
        'stroke-dashoffset',
        '280',
      );
    });
    test('Should define aria-label on progress bar', () => {
      const { container } = render(VtmnProgressbar, {
        variant: 'circular',
        progress: 30,
        'aria-label': 'unit test',
      });
      expect(getProgressCircular(container)).toHaveAttribute(
        'aria-label',
        'unit test',
      );
    });
  });
});
