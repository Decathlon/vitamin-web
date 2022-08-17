import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import VtmnButton from './VtmnButtonWithSlots.svelte';

describe('VtmnButton', () => {
  const getBtn = (container) => container.getElementsByClassName('vtmn-btn')[0];
  test('Should display a vtm-button with default variant and size', () => {
    const { container } = render(VtmnButton);
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveClass(
      'vtmn-btn_variant--primary-reversed',
      'vtmn-btn_size--medium',
    );
  });
  test('Should display specific variant', () => {
    const { container } = render(VtmnButton, { variant: 'secondary' });
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveClass('vtmn-btn_variant--secondary');
  });
  test('Should display left icon', () => {
    const { container } = render(VtmnButton, { iconLeft: 'account' });
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveClass('vtmn-btn--icon-left');
    expect(getBtn(container).children[0]).toHaveClass('vtmx-account');
  });
  test('Should display right icon', () => {
    const { container } = render(VtmnButton, { iconRight: 'account' });
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveClass('vtmn-btn--icon-right');
    expect(getBtn(container).children[1]).toHaveClass('vtmx-account');
  });
  test('Should display icon alone', () => {
    const { container } = render(VtmnButton, { iconAlone: 'account' });
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveClass('vtmn-btn--icon-alone');
    expect(getBtn(container).children[0]).toHaveClass('vtmx-account');
    expect(container.querySelector('[data-ut="slot"]')).toBeNull();
  });
  test('Should display icon alone without left / right icon', () => {
    const { container } = render(VtmnButton, {
      iconAlone: 'icon-alone',
      iconRight: 'icon-right',
      iconLeft: 'icon-left',
    });
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveClass('vtmn-btn--icon-alone');
    expect(getBtn(container)).not.toHaveClass(
      'vtmn-btn--icon-left',
      'vtmn-btn--icon-right',
    );
    expect(getBtn(container).children[0]).toHaveClass('vtmx-icon-alone');
  });
  test('Should apply custom class', () => {
    const { container } = render(VtmnButton, { class: 'custom-class' });
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveClass('custom-class');
  });
  test('Should apply aria-label on the button', () => {
    const { container } = render(VtmnButton, { 'aria-label': 'aria label' });
    expect(getBtn(container)).toBeVisible();
    expect(getBtn(container)).toHaveAttribute('aria-label', 'aria label');
  });
  test('Should display the slot value under the button', () => {
    const { getByText } = render(VtmnButton, { 'aria-label': 'aria label' });
    expect(getByText('Unit-button')).toBeVisible();
  });
  test('Should trigger click on click event', async () => {
    const handleClick = jest.fn();
    const { container, component } = render(VtmnButton);
    component.$on('click', handleClick);
    await fireEvent.click(getBtn(container));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('Should disable the button', () => {
    const { container } = render(VtmnButton, { disabled: true });
    expect(getBtn(container)).toHaveAttribute('disabled');
  });
});
