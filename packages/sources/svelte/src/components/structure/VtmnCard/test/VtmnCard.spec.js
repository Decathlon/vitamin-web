import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/svelte';

import VtmnCard from '../VtmnCard.svelte';
import VtmnCardWithSlot from './VtmnCardWithSlot.svelte';

describe('VtmnCard', () => {
  const getCard = (container) =>
    container.getElementsByClassName('vtmn-card')[0];
  const getImg = (container) =>
    container.getElementsByClassName('vtmn-card_image')[0];
  const getTitle = (container) =>
    container.getElementsByClassName('vtmn-card_content--title')[0];
  const getContent = (container) =>
    container.getElementsByClassName('vtmn-card_content')[0];
  const getContentBody = (container) =>
    container.getElementsByClassName('vtmn-card_content--body')[0];
  const getSlotContent = (container) =>
    container.querySelector('[slot="content"]');
  const getSlotActions = (container) =>
    container.querySelector('[slot="actions"]');
  const getSlotImg = (container) => container.querySelector('[slot="img"]');
  describe('default', () => {
    test("Should have a class 'vtmn-card'", () => {
      const { container } = render(VtmnCard);
      expect(getCard(container)).toBeVisible();
    });
    test('Should pass class from parameters', () => {
      const { container } = render(VtmnCard, { class: 'unit-test' });
      expect(getCard(container)).toHaveClass('unit-test');
    });
    test("Should not have a class 'vtmn-card_image'", () => {
      const { container } = render(VtmnCard);
      expect(getImg(container)).toBeUndefined();
    });
    test("Should not have a class 'vtmn-card_content--body'", () => {
      const { container } = render(VtmnCard);
      expect(getContentBody(container)).toBeUndefined();
    });
    test("Should not have a class 'vtmn-card_content--title'", () => {
      const { container } = render(VtmnCard);
      expect(getTitle(container)).toBeUndefined();
    });
    test("Should have a class 'vtmn-card_content--title' if prop title is defined", () => {
      const { container, getByText } = render(VtmnCard, { title: 'unit test' });
      expect(getTitle(container)).toBeVisible();
      expect(getByText('unit test')).toBeVisible();
    });
    test("Should have a class 'vtmn-card_content--body' if slot content is defined", () => {
      const { container } = render(VtmnCardWithSlot);
      expect(getContentBody(container)).toBeVisible();
    });
    test("Should have a class 'vtmn-card_content--body' if slot actions is defined", () => {
      const { container } = render(VtmnCardWithSlot);
      expect(getSlotActions(container)).toBeVisible();
    });
    test("Should have a class 'vtmn-card_image' if slot img is defined", () => {
      const { container } = render(VtmnCardWithSlot);
      expect(getSlotImg(container)).toBeVisible();
      expect(getImg(container)).toBeVisible();
    });
  });

  describe('top-image', () => {
    test("Should have a class 'vtmn-card_variant--top-image' if variant = 'top-image'", () => {
      const { container } = render(VtmnCardWithSlot, { variant: 'top-image' });
      expect(getCard(container)).toHaveClass('vtmn-card_variant--top-image');
    });
    test("Should not have a class 'vtmn-card_image--full' if fullImage = false", () => {
      const { container } = render(VtmnCardWithSlot, {
        variant: 'top-image',
        fullImage: false,
      });
      expect(getImg(container)).not.toHaveClass('vtmn-card_image--full');
    });
    test("Should have a class 'vtmn-card_image--full' if fullImage = true", () => {
      const { container } = render(VtmnCardWithSlot, {
        variant: 'top-image',
        fullImage: true,
      });
      expect(getImg(container)).toHaveClass('vtmn-card_image--full');
    });
    test("Should not have a class 'vtmn-card_content--opaque' if contentOpaque = true", () => {
      const { container } = render(VtmnCardWithSlot, {
        variant: 'top-image',
        contentOpaque: true,
      });
      expect(getContent(container)).not.toHaveClass('vtmn-card_image--full');
    });
  });

  describe('side-image', () => {
    test("Should have a class 'vtmn-card_variant--side-image' if variant = 'side-image'", () => {
      const { container } = render(VtmnCardWithSlot, { variant: 'side-image' });
      expect(getCard(container)).toHaveClass('vtmn-card_variant--side-image');
    });
    test("Should not have a class 'vtmn-card_image--full' if fullImage = true", () => {
      const { container } = render(VtmnCardWithSlot, {
        variant: 'side-image',
        fullImage: true,
      });
      expect(getImg(container)).not.toHaveClass('vtmn-card_image--full');
    });
    test("Should not have a class 'vtmn-card_content--opaque' if contentOpaque = true", () => {
      const { container } = render(VtmnCardWithSlot, {
        variant: 'side-image',
        contentOpaque: true,
      });
      expect(getContent(container)).not.toHaveClass(
        'vtmn-card_content--opaque',
      );
    });
  });

  describe('full-image', () => {
    test("Should have a class 'vtmn-card_variant--full-image' if variant = 'full-image'", () => {
      const { container } = render(VtmnCardWithSlot, { variant: 'full-image' });
      expect(getCard(container)).toHaveClass('vtmn-card_variant--full-image');
    });
    test("Should not have a class 'vtmn-card_image--full' if fullImage = true", () => {
      const { container } = render(VtmnCardWithSlot, {
        variant: 'full-image',
        fullImage: true,
      });
      expect(getImg(container)).not.toHaveClass('vtmn-card_image--full');
    });
    test("Should have a class 'vtmn-card_content--opaque' if contentOpaque = true", () => {
      const { container } = render(VtmnCardWithSlot, {
        variant: 'full-image',
        contentOpaque: true,
      });
      expect(getContent(container)).toHaveClass('vtmn-card_content--opaque');
    });
  });
});
