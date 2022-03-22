import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import VtmnRadioButton from '../VtmnRadioButton.svelte';

const id = 'id';
const name = 'name';
const label = 'label';
const value = 'value';

const params = { id, name, label, value };

describe('VtmnRadioButton', () => {
  test('Radio Button Should be visible', () => {
    const { getByLabelText, getByText } = render(VtmnRadioButton, params);
    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByText(label)).toBeInTheDocument();
  });

  test('Radio Button Should be selectable', () => {
    const { getByLabelText } = render(VtmnRadioButton, params);
    const radioButton = getByLabelText(label);
    expect(radioButton).not.toBeChecked();
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });

  test('Radio Button Should be checked', () => {
    const { getByLabelText } = render(VtmnRadioButton, {
      ...params,
      checked: true,
    });
    expect(getByLabelText(label)).toBeChecked();
  });

  test('Radio Button Should be disabled', () => {
    const { getByLabelText } = render(VtmnRadioButton, {
      ...params,
      disabled: true,
    });
    expect(getByLabelText(label)).toBeDisabled();
  });
});
