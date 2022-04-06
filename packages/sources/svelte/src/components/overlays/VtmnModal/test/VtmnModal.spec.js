import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/svelte';

import VtmnModal from '../VtmnModal.svelte';
import VtmnModalWithoutActions from './VtmnModalWithoutActions.svelte';
import VtmnModalWithActions from './VtmnModalWithActions.svelte';

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
  const getContentActions = (container) =>
    container.getElementsByClassName('vtmn-modal_content_actions')[0];
  const getContentDescription = (container) =>
    container.querySelector('#vtmn-modal-description');
  const getContentTitle = (container) =>
    container.querySelector('#vtmn-modal-title');

  describe('show = false', () => {
    test('Should have no content', () => {
      const { container } = render(VtmnModal, {
        show: false,
      });
      expect(getModal(container)).toBeUndefined();
    });
  });

  describe('show = true', () => {
    test('Should have no content', () => {
      const { container } = render(VtmnModal, {
        show: true,
      });
      expect(getModal(container)).toBeVisible();
    });
    test('Should not have class show if animationDisabled is true', () => {
      const { container } = render(VtmnModal, {
        show: true,
      });
      expect(getModal(container)).toBeVisible();
      expect(getModal(container)).not.toHaveClass('show');
    });
    test('Should pass custom class to modal', () => {
      const { container } = render(VtmnModal, {
        show: true,
        class: 'unit-test',
      });
      expect(getModal(container)).toHaveClass('unit-test');
    });
    test('Should trigger cancel if user click on overlay', async () => {
      const { container, component } = render(VtmnModal, {
        show: true,
      });
      await expectedCancelOnElement(getOverlay(container), component, 1);
    });

    test('Should have a cancel button', () => {
      const { container } = render(VtmnModal, {
        show: true,
      });
      expect(getCloseButton(container)).toBeVisible();
    });
    test('Should trigger cancel on click close button', async () => {
      const { container, component } = render(VtmnModal, {
        show: true,
      });
      await expectedCancelOnElement(getCloseButton(container), component, 1);
    });

    test('Should not have a slot title', () => {
      const { container } = render(VtmnModal, {
        show: true,
      });
      expect(getContentTitle(container)).toBeNull();
    });

    test('Should not have a slot description', () => {
      const { container } = render(VtmnModal, {
        show: true,
      });
      expect(getContentDescription(container)).toBeNull();
    });

    test('Should not have a slot actions', () => {
      const { container } = render(VtmnModal, {
        show: true,
      });
      expect(getContentActions(container)).toBeUndefined();
    });

    describe('With slot description', () => {
      test('Should have a slot title', () => {
        const { container } = render(VtmnModalWithoutActions, {
          show: true,
        });
        expect(getContentTitle(container)).toBeVisible();
        expect(getContentTitle(container)).toHaveClass(
          'vtmn-modal_content_title--text',
        );
      });
      test('Should have a slot description', () => {
        const { container } = render(VtmnModalWithoutActions, {
          show: true,
        });
        expect(getContentDescription(container)).toBeVisible();
      });
      test('Should not have a slot description', () => {
        const { container } = render(VtmnModalWithoutActions, {
          show: true,
        });
        expect(getContentActions(container)).toBeUndefined();
      });
      test("Should not have a class 'vtmn-modal_content_body--overflow-indicator'", () => {
        const { container } = render(VtmnModalWithoutActions, {
          show: true,
        });
        expect(getOverFlow(container)).toBeUndefined();
      });
    });

    describe('With slot description and actions', () => {
      test("Should have a class 'vtmn-modal_content_body--overflow-indicator'", () => {
        const { container } = render(VtmnModalWithActions, {
          show: true,
        });
        expect(getOverFlow(container)).toBeVisible();
      });
      test('Should have a slot actions', () => {
        const { container } = render(VtmnModalWithActions, {
          show: true,
        });
        expect(getContentActions(container)).toBeVisible();
      });
    });
  });
});
