import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/svelte';
import VtmnQuantity from '../VtmnQuantity.svelte';

describe('VtmnQuantity', () => {
  const getQuantity = (container) =>
    container.getElementsByClassName('vtmn-quantity')[0];
  const getButtons = (container) =>
    container.getElementsByClassName('vtmn-btn');
  const getInput = (container) => container.querySelector('input');
  const getError = (container) =>
    container.getElementsByClassName('vtmn-quantity_error-text')[0];
  const expectedEventClickOnElement = async (
    event,
    element,
    component,
    expectedClickCount,
  ) => {
    const handleClick = jest.fn();
    component.$on(event, handleClick);
    await fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(expectedClickCount);
  };

  test("Should display the 'vtmn-quantity' with 2 buttons", () => {
    const { container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
    });
    const [subtractBtn, addBtn] = getButtons(container);
    const input = getInput(container);
    const error = getError(container);
    expect(getQuantity(container)).toBeVisible();
    expect(subtractBtn).toBeVisible();
    expect(addBtn).toBeVisible();
    expect(subtractBtn.disabled).toBe(false);
    expect(addBtn.disabled).toBe(false);
    expect(input.disabled).toBe(false);
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).not.toHaveAttribute('aria-describedby');
    expect(error).toBeUndefined();
  });
  test('Should display the label', () => {
    const { getByText } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
    });
    expect(getByText('unit-test')).toBeVisible();
  });
  test('Should set the id on the input and for label', () => {
    const { getByText, container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
    });
    expect(getByText('unit-test')).toHaveAttribute('for', 'unit-id');
    expect(getInput(container)).toHaveAttribute('id', 'unit-id');
  });
  test('Should display the value on the input', () => {
    const { container } = render(VtmnQuantity, {
      value: 40,
      label: 'unit-test',
      id: 'unit-id',
    });
    expect(getInput(container).value).toBe('40');
  });

  test('Should trigger add when click on add button', async () => {
    const { container, component } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
    });
    const [, addBtn] = getButtons(container);
    await expectedEventClickOnElement('add', addBtn, component, 1);
  });
  test('Should trigger subtract when click on subtract button', async () => {
    const { container, component } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
    });
    const [subtractBtn] = getButtons(container);
    await expectedEventClickOnElement('subtract', subtractBtn, component, 1);
  });
  test('Should add step on value when click on add button', async () => {
    const { container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      value: 20,
      step: 5,
    });
    const [, addBtn] = getButtons(container);
    await fireEvent.click(addBtn);
    expect(getInput(container).value).toBe('25');
  });
  test('Should remove step on value when click on subtract button', async () => {
    const { container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      value: 20,
      step: 5,
    });
    const [subtractBtn] = getButtons(container);
    await fireEvent.click(subtractBtn);
    expect(getInput(container).value).toBe('15');
  });
  test('Should disabled all element when disabled is true', async () => {
    const { container, getByText } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      disabled: true,
    });
    const [subtractBtn, addBtn] = getButtons(container);
    const input = getInput(container);
    expect(subtractBtn.disabled).toBe(true);
    expect(addBtn.disabled).toBe(true);
    expect(input.disabled).toBe(true);
    expect(getByText('unit-test')).toHaveAttribute('aria-disabled', 'true');
    expect(
      container.getElementsByClassName('vtmn-quantity_content')[0],
    ).toHaveAttribute('aria-disabled', 'true');
  });
  test('Should not click on add button if disabled is true', async () => {
    const { container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      disabled: true,
    });
    const [, addBtn] = getButtons(container);
    expect(addBtn.disabled).toBe(true);
  });
  test('Should not click on subtract button if disabled is true', () => {
    const { container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      disabled: true,
    });
    const [subtractBtn] = getButtons(container);
    expect(subtractBtn.disabled).toBe(true);
  });

  test('Should disabled subtract button when value < min', () => {
    const { container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      value: 0,
      min: 1,
    });
    const [subtractBtn, addBtn] = getButtons(container);
    expect(subtractBtn.disabled).toBe(true);
    expect(addBtn.disabled).toBe(false);
  });
  test('Should disabled add button when value > max', () => {
    const { container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      value: 11,
      max: 10,
    });
    const [subtractBtn, addBtn] = getButtons(container);
    expect(addBtn.disabled).toBe(true);
    expect(subtractBtn.disabled).toBe(false);
  });

  test("Should display error message 'vtmn-quantity_error-text' if error are display", async () => {
    const { getByText, container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      error: 'unit test error',
    });
    const error = getByText('unit test error');
    const input = getInput(container);
    expect(error).toBeVisible();
    expect(error).toHaveAttribute('id', 'quantity-helper-unit-id');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute(
      'aria-describedby',
      'quantity-helper-unit-id',
    );
  });

  test('Should trigger on:change when change event on input', async () => {
    const { component, container } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
      error: 'unit test error',
    });
    const input = getInput(container);
    const handleEvent = jest.fn();
    component.$on('change', handleEvent);
    await fireEvent.change(input, { target: { value: 10 } });
    expect(input.value).toBe('10');
    expect(handleEvent).toHaveBeenCalledTimes(1);
  });

  test('Should trigger on:change when click on add button', async () => {
    const { container, component } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
    });
    const [, addBtn] = getButtons(container);
    await expectedEventClickOnElement('change', addBtn, component, 1);
  });

  test('Should trigger on:change when click on subtract button', async () => {
    const { container, component } = render(VtmnQuantity, {
      label: 'unit-test',
      id: 'unit-id',
    });
    const [subtractBtn] = getButtons(container);
    await expectedEventClickOnElement('change', subtractBtn, component, 1);
  });
});
