import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/svelte';

import VtmnModal from '../VtmnModal.svelte';
import VtmnModalWithDescription from './VtmnModalWithDescription.svelte';
import VtmnModalWithSlots from './VtmnModalWithSlots.svelte';

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

describe('VtmnModal', () => {
  const getModal = (container) =>
    container.getElementsByClassName('vtmn-modal')[0];
  const getOverlay = (container) =>
    container.getElementsByClassName('vtmn-modal_background-overlay')[0];
  const getCloseButton = (container) =>
    container.querySelector('button[aria-label="close"]');
  const getOverFlow = (container) =>
    container.getElementsByClassName(
      'vtmn-modal_content_body--overflow-indicator',
    )[0];

  const getSlotDescription = (container) =>
    container.querySelector('[slot="description"]');
  const getSlotActions = (container) =>
    container.querySelector('[slot="actions"]');

  describe('show = false', () => {
    test('Should have no content', () => {
      const { container } = render(VtmnModal, {
        show: false,
        title: 'Unit-test',
      });
      expect(getModal(container)).toBeUndefined();
    });
  });

  describe('show = true', () => {
    test('Should have no content', () => {
      const { container } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
      });
      expect(getModal(container)).toBeVisible();
      expect(getModal(container)).toHaveClass('show');
    });
    test('Should pass custom class to modal', () => {
      const { container } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
        class: 'unit-test',
      });
      expect(getModal(container)).toHaveClass('unit-test');
    });
    test('Should trigger cancel if user click on overlay', async () => {
      const { container, component } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
      });
      await expectedCancelOnElement(getOverlay(container), component, 1);
    });

    test('Should have title if propertie title are defined', () => {
      const { getByText } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
      });
      expect(getByText('Unit-test')).toBeVisible();
      expect(getByText('Unit-test')).toHaveClass(
        'vtmn-modal_content_title--text',
      );
    });
    test('Should have a cancel button', () => {
      const { container } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
      });
      expect(getCloseButton(container)).toBeVisible();
    });
    test('Should trigger cancel on click close button', async () => {
      const { container, component } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
      });
      await expectedCancelOnElement(getCloseButton(container), component, 1);
    });

    test('Should not have a slot description', () => {
      const { container } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
      });
      expect(getSlotDescription(container)).toBeNull();
    });

    test('Should not have a slot actions', () => {
      const { container } = render(VtmnModal, {
        show: true,
        title: 'Unit-test',
      });
      expect(getSlotActions(container)).toBeNull();
    });

    describe('With slot description', () => {
      test('Should have a slot description', () => {
        const { container } = render(VtmnModalWithDescription, {
          show: true,
          title: 'Unit-test',
        });
        expect(getSlotDescription(container)).toBeVisible();
      });
      test('Should not have a slot description', () => {
        const { container } = render(VtmnModalWithDescription, {
          show: true,
          title: 'Unit-test',
        });
        expect(getSlotActions(container)).toBeNull();
      });
      test("Should not have a class 'vtmn-modal_content_body--overflow-indicator'", () => {
        const { container } = render(VtmnModalWithDescription, {
          show: true,
          title: 'Unit-test',
        });
        expect(getOverFlow(container)).toBeUndefined();
      });
    });

    describe('With slot description and actions', () => {
      test("Should have a class 'vtmn-modal_content_body--overflow-indicator'", () => {
        const { container } = render(VtmnModalWithSlots, {
          show: true,
          title: 'Unit-test',
        });
        expect(getOverFlow(container)).toBeVisible();
      });
      test('Should have a slot actions', () => {
        const { container } = render(VtmnModalWithSlots, {
          show: true,
          title: 'Unit-test',
        });
        expect(getSlotActions(container)).toBeVisible();
      });
    });
  });
});
