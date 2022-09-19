import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/svelte';
import VtmnTextInput from '../VtmnTextInput.svelte';

describe('VtmnTextInput', () => {
  const params = {
    id: 'text-input',
    labelText: 'Unit test label',
    placeholder: 'Unit test placeholder',
    value: 'Unit test value',
  };

  const getTextInput = (container) =>
    container.getElementsByClassName('vtmn-text-input')[0];
  const getHelperText = (container) =>
    container.getElementsByClassName('vtmn-text-input_helper-text')[0];
  const getTextLabel = (container) =>
    container.getElementsByClassName('vtmn-text-input_label')[0];
  const getIcon = (container, iconName) =>
    container.getElementsByClassName(`vtmx-${iconName}`)[0];

  describe('default', () => {
    test('Should display an input type text', () => {
      const { container } = render(VtmnTextInput, { ...params });
      expect(getTextInput(container).tagName).toEqual('INPUT');
      expect(getTextInput(container).type).toEqual('text');
      expect(getTextInput(container)).not.toHaveClass(
        'vtmn-text-input--valid',
        'vtmn-text-input--error',
      );
      expect(getHelperText(container)).toBeUndefined();
      expect(getTextInput(container)).not.toHaveAttribute('disabled');
    });

    test('Should trigger event change when the input value changes', async () => {
      const onChange = jest.fn((e) => e.target.value);
      const nextValue = 'Unit test value changed';
      const { container, component } = render(VtmnTextInput, { ...params });
      component.$on('input', onChange);
      await fireEvent.input(getTextInput(container), {
        target: { value: nextValue },
      });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.results[0].value).toEqual(nextValue);
    });

    test('Should display the label if labelText are defined', () => {
      const { container } = render(VtmnTextInput, { ...params });
      expect(getTextLabel(container)).toBeVisible();
      expect(getTextLabel(container)).toHaveAttribute('for', 'text-input');
      expect(getTextInput(container)).toHaveAttribute('id', 'text-input');
    });
    test('Should display the placeholder', () => {
      const { container } = render(VtmnTextInput, { ...params });
      expect(getTextInput(container)).toHaveAttribute(
        'placeholder',
        'Unit test placeholder',
      );
    });
    test('Should disable the content', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        disabled: true,
      });
      expect(getTextInput(container)).toHaveAttribute('disabled');
    });
    test('Should bind the value', () => {
      const { container } = render(VtmnTextInput, { ...params });
      expect(getTextInput(container).value).toEqual('Unit test value');
    });
    test('Should apply an aria-label', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        'aria-label': 'input aria label',
      });
      expect(getTextInput(container)).toHaveAttribute(
        'aria-label',
        'input aria label',
      );
    });
    test('Should apply custom class', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        class: 'custom-class',
      });
      expect(getTextInput(container)).toHaveClass('custom-class');
    });
    test('Should apply vtmn-text-input--valid if valid are true', () => {
      const { container } = render(VtmnTextInput, { ...params, valid: true });
      expect(getTextInput(container)).toHaveClass('vtmn-text-input--valid');
    });
    test('Should apply vtmn-text-input--error if error are true', () => {
      const { container } = render(VtmnTextInput, { ...params, error: true });
      expect(getTextInput(container)).toHaveClass('vtmn-text-input--error');
    });
    test('Should display an icon', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        icon: 'unit-test',
      });
      expect(getIcon(container, 'unit-test')).toBeVisible();
    });
  });

  describe('multiline', () => {
    test('Should display an textarea', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
      });
      expect(getTextInput(container).tagName).toEqual('TEXTAREA');
      expect(getTextInput(container)).not.toHaveClass(
        'vtmn-text-input--valid',
        'vtmn-text-input--error',
      );
      expect(getHelperText(container)).toBeUndefined();
      expect(getTextInput(container)).not.toHaveAttribute('disabled');
    });

    test('Should display the label if labelText are defined', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
      });
      expect(getTextLabel(container)).toBeVisible();
      expect(getTextLabel(container)).toHaveAttribute('for', 'text-input');
      expect(getTextInput(container)).toHaveAttribute('id', 'text-input');
    });
    test('Should display the placeholder ', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
      });
      expect(getTextInput(container)).toHaveAttribute(
        'placeholder',
        'Unit test placeholder',
      );
    });
    test('Should disable the content', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
        disabled: true,
      });
      expect(getTextInput(container)).toHaveAttribute('disabled');
    });
    test('Should bind the value', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
      });
      expect(getTextInput(container).value).toEqual('Unit test value');
    });
    test('Should apply an aria-label', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
        'aria-label': 'input aria label',
      });
      expect(getTextInput(container)).toHaveAttribute(
        'aria-label',
        'input aria label',
      );
    });
    test('Should apply custom class', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
        class: 'custom-class',
      });
      expect(getTextInput(container)).toHaveClass('custom-class');
    });
    test('Should apply vtmn-text-input--valid if valid are true', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
        valid: true,
      });
      expect(getTextInput(container)).toHaveClass('vtmn-text-input--valid');
    });
    test('Should apply vtmn-text-input--error if error are true', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
        error: true,
      });
      expect(getTextInput(container)).toHaveClass('vtmn-text-input--error');
    });
    test('Should not display an icon', () => {
      const { container } = render(VtmnTextInput, {
        ...params,
        multiline: true,
        icon: 'unit-test',
      });
      expect(getIcon(container, 'unit-test')).toBeUndefined();
    });
  });

  describe('helperText', () => {
    test('Should display helper-text if helperText are defined', () => {
      const { getByText } = render(VtmnTextInput, {
        ...params,
        helperText: 'unit helper text',
      });
      expect(getByText('unit helper text')).toBeVisible();
      expect(getByText('unit helper text')).toHaveClass(
        'vtmn-text-input_helper-text',
      );
    });
    test('Should display helper-text as error if error are true', () => {
      const { getByText } = render(VtmnTextInput, {
        ...params,
        helperText: 'unit helper text',
        error: true,
      });
      expect(getByText('unit helper text')).toBeVisible();
      expect(getByText('unit helper text')).toHaveClass(
        'vtmn-text-input_helper-text',
        'vtmn-text-input_helper-text--error',
      );
    });
  });
});
