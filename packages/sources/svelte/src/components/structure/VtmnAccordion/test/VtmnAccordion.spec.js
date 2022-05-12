import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import VtmnAccordion from './VtmnAccordionWithSlots.svelte';

describe('VtmnAccordion', () => {
  const getAccordion = (container) =>
    container.getElementsByClassName('vtmn-accordion')[0];

  test('Should display the accordion with open = false by default and hide content', () => {
    const { container, getByText } = render(VtmnAccordion, {
      summary: 'Unit test summary',
    });
    expect(getAccordion(container)).not.toHaveAttribute('open');
    expect(getByText('Unit test content')).not.toBeVisible();
    expect(getAccordion(container)).toHaveAttribute('aria-disabled', 'false');
  });

  test('Should apply custom class', () => {
    const { container } = render(VtmnAccordion, {
      summary: 'Unit test summary',
      class: 'custom-class',
    });
    expect(getAccordion(container)).toHaveClass('custom-class');
  });

  test('Should apply aria-label', () => {
    const { container } = render(VtmnAccordion, {
      summary: 'Unit test summary',
      'aria-label': 'custom aria label',
    });
    expect(getAccordion(container)).toHaveAttribute(
      'aria-label',
      'custom aria label',
    );
  });

  test('Should display list icon', () => {
    const { container } = render(VtmnAccordion, {
      summary: 'Unit test summary',
      withIconLeft: true,
    });
    expect(getAccordion(container)).toHaveClass(
      'vtmn-accordion--with-icon-left',
    );
  });

  test('Should display the content if open is true', () => {
    const { getByText } = render(VtmnAccordion, {
      summary: 'Unit test summary',
      open: true,
    });
    expect(getByText('Unit test content')).toBeVisible();
  });

  test('Should disable the accordion', () => {
    const { container } = render(VtmnAccordion, {
      summary: 'Unit test summary',
      disabled: true,
    });
    expect(getAccordion(container)).toHaveAttribute('aria-disabled', 'true');
  });

  test('Should display the summary', () => {
    const { getByText } = render(VtmnAccordion, {
      summary: 'Unit test summary',
    });
    expect(getByText('Unit test summary')).toBeVisible();
  });
});
