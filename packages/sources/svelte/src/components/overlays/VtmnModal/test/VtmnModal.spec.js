import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/svelte';
import VtmnModal from '../VtmnModal.svelte';
import VtmnModalWithActions from './VtmnModalWithActions.svelte';
import VtmnModalWithoutActions from './VtmnModalWithoutActions.svelte';

const expectedCloseOnElement = async (
  element,
  component,
  expectedClickCount,
) => {
  const handleClick = jest.fn();
  component.$on('close', handleClick);
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
  const getModalContent = (container) =>
    container.getElementsByClassName('vtmn-modal_content')[0];
  const getContentActions = (container) =>
    container.getElementsByClassName('vtmn-modal_content_actions')[0];
  const getContentDescription = (container) =>
    container.querySelector('#vtmn-modal-description');
  const getContentTitle = (container) =>
    container.querySelector('#vtmn-modal-title');

  describe('open = false', () => {
    test('Should have no content', () => {
      const { container } = render(VtmnModal, {
        open: false,
      });
      expect(getModal(container)).toBeUndefined();
    });
  });

  describe('open = true', () => {
    test('Should have no content', () => {
      const { container } = render(VtmnModal, {
        open: true,
      });
      expect(getModal(container)).toBeVisible();
    });
    test('Should have an id', () => {
      const { container } = render(VtmnModal, {
        open: true,
        id: 'unit-test',
      });
      expect(getModalContent(container)).toHaveAttribute('id', 'unit-test');
    });
    test('Should pass custom class to modal content', () => {
      const { container } = render(VtmnModal, {
        open: true,
        class: 'unit-test',
      });
      expect(getModalContent(container)).toHaveClass('unit-test');
    });
    test('Should trigger close if user click on overlay', async () => {
      const { container, component } = render(VtmnModal, {
        open: true,
      });
      await expectedCloseOnElement(getOverlay(container), component, 1);
    });

    test('Should have a close button', () => {
      const { container } = render(VtmnModal, {
        open: true,
      });
      expect(getCloseButton(container)).toBeVisible();
    });
    test('Should trigger close on click close button', async () => {
      const { container, component } = render(VtmnModal, {
        open: true,
      });
      await expectedCloseOnElement(getCloseButton(container), component, 1);
    });

    test('Should not have a slot title', () => {
      const { container } = render(VtmnModal, {
        open: true,
      });
      expect(getContentTitle(container)).toBeNull();
    });

    test('Should not have a slot description', () => {
      const { container } = render(VtmnModal, {
        open: true,
      });
      expect(getContentDescription(container)).toBeNull();
    });

    test('Should not have a slot actions', () => {
      const { container } = render(VtmnModal, {
        open: true,
      });
      expect(getContentActions(container)).toBeUndefined();
    });

    describe('With slot description', () => {
      test('Should have a slot title', () => {
        const { container } = render(VtmnModalWithoutActions, {
          open: true,
        });
        expect(getContentTitle(container)).toBeVisible();
        expect(getContentTitle(container)).toHaveClass(
          'vtmn-modal_content_title--text',
        );
      });
      test('Should have a slot description', () => {
        const { container } = render(VtmnModalWithoutActions, {
          open: true,
        });
        expect(getContentDescription(container)).toBeVisible();
      });
      test('Should not have a slot description', () => {
        const { container } = render(VtmnModalWithoutActions, {
          open: true,
        });
        expect(getContentActions(container)).toBeUndefined();
      });
    });

    describe('With slot description and actions', () => {
      test('Should have a slot actions', () => {
        const { container } = render(VtmnModalWithActions, {
          open: true,
        });
        expect(getContentActions(container)).toBeVisible();
      });
    });
  });
});
