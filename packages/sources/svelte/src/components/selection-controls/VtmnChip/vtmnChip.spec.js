import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/svelte';
import { VARIANTS, SIZES } from './enums';

import VtmnChip from './VtmnChip.svelte';

describe('VtmnChip', () => {
  const getChip = (container) =>
    container.getElementsByClassName('vtmn-chip')[0];
  const getIcon = (container, iconName) =>
    container.getElementsByClassName(`vtmx-${iconName}`)[0];
  const getCancelBtn = (container) =>
    container.getElementsByClassName('vtmn-btn')[0];
  const expectedClickOnElement = async (
    element,
    component,
    expectedClickCount,
  ) => {
    const handleClick = jest.fn();
    component.$on('click', handleClick);
    await fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(expectedClickCount);
  };
  const expectedCancelOnElement = async (
    element,
    component,
    expectedClickCount,
  ) => {
    const handleClick = jest.fn();
    component.$on('cancel', handleClick);
    await fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(expectedClickCount);
  };

  describe('Default', () => {
    test('Should have single choice variant by default', () => {
      const { container } = render(VtmnChip);
      expect(getChip(container)).toHaveClass(
        'vtmn-chip_variant--single-choice',
      );
    });

    test('Should set class vtmn-chip_size--medium by default', () => {
      const { container } = render(VtmnChip);
      expect(getChip(container)).toHaveClass('vtmn-chip_size--medium');
    });

    test('Should set class vtmn-chip_size--small if size is small', () => {
      const { container } = render(VtmnChip, { size: SIZES.SMALL });
      expect(getChip(container)).toHaveClass('vtmn-chip_size--small');
    });

    test("Should not have class 'vtmn-chip--disabled' if it's false", () => {
      const { container } = render(VtmnChip, { disabled: false });
      expect(getChip(container)).not.toHaveClass('vtmn-chip--disabled');
    });

    test("Should have class 'vtmn-chip--disabled' if disabled is true", () => {
      const { container } = render(VtmnChip, { disabled: true });
      expect(getChip(container)).toHaveClass('vtmn-chip--disabled');
    });

    test("Should not have class 'vtmn-chip--selected' if selected is false", () => {
      const { container } = render(VtmnChip, { selected: false });
      expect(getChip(container)).not.toHaveClass('vtmn-chip--selected');
    });

    test("Should have class 'vtmn-chip--selected' if selected is true", () => {
      const { container } = render(VtmnChip, { selected: true });
      expect(getChip(container)).toHaveClass('vtmn-chip--selected');
    });

    test('Should pass class on the main container', () => {
      const { container } = render(VtmnChip, { class: 'unit-test' });
      expect(getChip(container)).toHaveClass('unit-test');
    });

    test('Should fire click event when click on the container', async () => {
      const { container, component } = render(VtmnChip);
      await expectedClickOnElement(getChip(container), component, 1);
    });

    test('Should have a tabindex = 0', () => {
      const { container } = render(VtmnChip);
      expect(getChip(container)).toHaveAttribute('tabindex', '0');
    });

    test('Should not have a tabindex if disabled', () => {
      const { container } = render(VtmnChip, { disabled: true });
      expect(getChip(container)).not.toHaveAttribute('tabindex');
    });

    test("Should not click if it's disabled", async () => {
      const { container, component } = render(VtmnChip, { disabled: true });
      await expectedClickOnElement(getChip(container), component, 0);
    });
  });

  describe('Filter', () => {
    test('Should set class vtmn-chip_variant--filter', () => {
      const { container } = render(VtmnChip, { variant: VARIANTS.FILTER });
      expect(getChip(container)).toHaveClass('vtmn-chip_variant--filter');
    });

    test('Should be disabled', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.FILTER,
        disabled: true,
      });
      expect(getChip(container)).toHaveClass('vtmn-chip--disabled');
    });

    test('Should be selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.FILTER,
        selected: true,
      });
      expect(getChip(container)).toHaveClass('vtmn-chip--selected');
    });

    test('Should have a tabindex = 0', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.FILTER,
        selected: true,
      });
      expect(getChip(container)).toHaveAttribute('tabindex', '0');
    });

    test('Should not display vtmx icon if selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.FILTER,
        icon: 'add-fill',
        selected: true,
      });
      expect(getIcon(container)).toBeUndefined();
    });

    test('Should not display vtmx icon if not selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.FILTER,
        icon: 'add-fill',
      });
      expect(getIcon(container)).toBeUndefined();
    });
  });

  describe('Input', () => {
    test('Should set class vtmn-chip_variant--input', () => {
      const { container } = render(VtmnChip, { variant: VARIANTS.INPUT });
      expect(getChip(container)).toHaveClass('vtmn-chip_variant--input');
    });

    test('Should be disabled', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        disabled: true,
      });
      expect(getChip(container)).toHaveClass('vtmn-chip--disabled');
    });

    test('Should not click when chip is disabled', async () => {
      const { container, component } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        disabled: true,
      });
      await expectedClickOnElement(getChip(container), component, 0);
    });

    test('Should not click on cancel button when disabled', async () => {
      const { container, component } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        disabled: true,
        selected: true,
      });
      await expectedCancelOnElement(getChip(container), component, 0);
    });

    test('Should not trigger click when user click on cancel', async () => {
      const { container, component } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        selected: true,
      });

      const handleClickCancel = jest.fn();
      const handleClickDefault = jest.fn();
      component.$on('cancel', handleClickCancel);
      component.$on('click', handleClickDefault);

      await fireEvent.click(getCancelBtn(container));

      expect(handleClickDefault).toHaveBeenCalledTimes(0);
      expect(handleClickCancel).toHaveBeenCalledTimes(1);
    });

    test('Should not trigger click event when the chip is selected', async () => {
      const { container, component } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        selected: true,
      });

      const handleClickCancel = jest.fn();
      const handleClickDefault = jest.fn();
      component.$on('cancel', handleClickCancel);
      component.$on('click', handleClickDefault);

      await fireEvent.click(getChip(container));

      expect(handleClickDefault).toHaveBeenCalledTimes(0);
      expect(handleClickCancel).toHaveBeenCalledTimes(0);
    });

    test('Should be selectable', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        selected: true,
      });
      expect(getChip(container)).toHaveClass('vtmn-chip--selected');
    });

    test('Should not display button when chip not selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        selected: false,
      });
      expect(getCancelBtn(container)).toBeUndefined();
    });

    test('Should display button cancel when chip is selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        selected: true,
      });
      expect(getCancelBtn(container)).toBeVisible();
    });

    test('Should be display an icon', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        icon: 'add-fill',
      });
      expect(getIcon(container, 'add-fill')).toHaveClass('vtmx-add-fill');
    });

    test("Should have a tabindex = 0 if it's not selected", () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        selected: false,
      });
      expect(getChip(container)).toHaveAttribute('tabindex', '0');
    });

    test('Should not have a tabindex if chip is selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.INPUT,
        selected: true,
      });
      expect(getChip(container)).not.toHaveAttribute('tabindex');
    });
  });

  describe('Single choice', () => {
    test('Should set class vtmn-chip_variant--single-choice', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.SINGLE_CHOICE,
      });
      expect(getChip(container)).toHaveClass(
        'vtmn-chip_variant--single-choice',
      );
    });

    test('Should be selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.SINGLE_CHOICE,
        selected: true,
      });
      expect(getChip(container)).toHaveClass('vtmn-chip--selected');
    });

    test('Should be disable', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.SINGLE_CHOICE,
        disabled: true,
      });
      expect(getChip(container)).toHaveClass('vtmn-chip--disabled');
    });

    test('Should not have a icon', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.SINGLE_CHOICE,
        icon: 'add-fill',
      });
      expect(getIcon(container)).toBeUndefined();
    });

    test('Should not have a cancel button when unselected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.SINGLE_CHOICE,
        selected: false,
      });
      expect(getCancelBtn(container)).toBeUndefined();
    });

    test('Should not have a cancel button when selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.SINGLE_CHOICE,
        selected: true,
      });
      expect(getCancelBtn(container)).toBeUndefined();
    });

    test('Should click on a single choice', async () => {
      const { container, component } = render(VtmnChip);
      await expectedClickOnElement(getChip(container), component, 1);
    });

    test('Should have a tabindex = 0 when selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.SINGLE_CHOICE,
        selected: true,
      });
      expect(getChip(container)).toHaveAttribute('tabindex', '0');
    });
  });

  describe('Action', () => {
    test('Should set class vtmn-chip_variant--action', () => {
      const { container } = render(VtmnChip, { variant: VARIANTS.ACTION });
      expect(getChip(container)).toHaveClass('vtmn-chip_variant--action');
    });

    test('Should not be selected', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.ACTION,
        selected: true,
      });
      expect(getChip(container)).not.toHaveClass('vtmn-chip--selected');
    });

    test('Should display icon', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.ACTION,
        icon: 'add-fill',
      });
      expect(getIcon(container, 'add-fill')).toHaveClass('vtmx-add-fill');
    });

    test('Should click on the chip', async () => {
      const handleClick = jest.fn();
      const { container, component } = render(VtmnChip, {
        variant: VARIANTS.ACTION,
      });
      component.$on('click', handleClick);
      await fireEvent.click(getChip(container));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('Should be disabled', () => {
      const { container } = render(VtmnChip, {
        variant: VARIANTS.ACTION,
        disabled: true,
      });
      expect(getChip(container)).toHaveClass('vtmn-chip--disabled');
    });

    test('Should have a tabindex=0', () => {
      const { container } = render(VtmnChip, { variant: VARIANTS.ACTION });
      expect(getChip(container)).toHaveAttribute('tabindex', '0');
    });
  });
});
