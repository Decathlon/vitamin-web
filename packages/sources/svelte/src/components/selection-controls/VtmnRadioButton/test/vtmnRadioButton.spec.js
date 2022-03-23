import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import VtmnRadioButton from '../VtmnRadioButton.svelte';
import VtmnRadioButtonWithSlot from './VtmnRadioButtonWithSlot.svelte';

const id = 'id';
const name = 'name';
const value = 'value';
const label = 'label';

let selected;

const params = { id, name, value, group: selected };

describe('VtmnRadioButton', () => {
  test('Radio Button should be visible', () => {
    const { getByRole } = render(VtmnRadioButton, { ...params });
    expect(getByRole('radio')).toBeInTheDocument();
  });

  test('Radio Button with label should be visible', () => {
    const { getByLabelText, getByText } = render(VtmnRadioButtonWithSlot, {
      ...params,
    });
    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByText(label)).toBeInTheDocument();
  });

  test('Radio Button Should be selectable', async () => {
    const { getByLabelText } = render(VtmnRadioButtonWithSlot, { ...params });
    const radioButton = getByLabelText(label);
    expect(radioButton).not.toBeChecked();
    await fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });

  test('Radio Button Should be checked', () => {
    const { getByRole } = render(VtmnRadioButtonWithSlot, {
      ...params,
      group: value,
    });
    expect(getByRole('radio')).toBeChecked();
  });

  test('Radio Button Should be disabled', () => {
    const { getByRole } = render(VtmnRadioButton, {
      ...params,
      disabled: true,
    });
    expect(getByRole('radio')).toBeDisabled();
  });
});
