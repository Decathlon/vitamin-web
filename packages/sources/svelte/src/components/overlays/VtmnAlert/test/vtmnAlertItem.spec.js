import '@testing-library/jest-dom';

import { fireEvent, waitFor, render } from '@testing-library/svelte';

import VtmnAlertItem from '../VtmnAlertItem.svelte';

const timeout = 5000;

describe('VtmnAlertItem', () => {
  const getAlert = (container) =>
    container.getElementsByClassName('vtmn-alert')[0];
  const getDescription = (container) =>
    container.getElementsByClassName('vtmn-alert_content-description')[0];
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

  test("Should be visible with class 'vtmn-alert' and 'show'", () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
    });
    expect(getAlert(container)).toBeVisible();
    expect(getAlert(container)).toHaveClass('vtmn-alert', 'show');
  });

  // Si aucun variant est passé, il doit avoir le variant info par défaut
  test("Should have class 'vtmn-alert_variant--info' if no variant are selected", () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
    });
    expect(getAlert(container)).toHaveClass('vtmn-alert_variant--info');
  });

  // Show have class vtmn-alert_variant--info if variant = info
  test("Should have class 'vtmn-alert_variant--info' if variant = info", () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      variant: 'info',
    });
    expect(getAlert(container)).toHaveClass('vtmn-alert_variant--info');
  });

  // Show have class vtmn-alert_variant--success if variant = success
  test("Should have class 'vtmn-alert_variant--success' if variant = success", () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      variant: 'success',
    });
    expect(getAlert(container)).toHaveClass('vtmn-alert_variant--success');
  });

  // Show have class vtmn-alert_variant--danger if variant = danger
  test("Should have class 'vtmn-alert_variant--danger' if variant = danger", () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      variant: 'danger',
    });
    expect(getAlert(container)).toHaveClass('vtmn-alert_variant--danger');
  });

  // Show have class vtmn-alert_variant--warning if variant = warning
  test("Should have class 'vtmn-alert_variant--warning' if variant = warning", () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      variant: 'warning',
    });
    expect(getAlert(container)).toHaveClass('vtmn-alert_variant--warning');
  });

  // On doit pouvoir lui passer des custom class
  test('Should pass custom class into the component', () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      class: 'custom-class',
    });
    expect(getAlert(container)).toHaveClass('custom-class');
  });

  // On doit pouvoir lui passer des attribus 'aria-labelledby'
  test('Should pass attributes into the component', () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      'aria-labelledby': 'unit-tests',
    });
    expect(getAlert(container)).toHaveAttribute(
      'aria-labelledby',
      'unit-tests',
    );
  });

  // Si un title est défini, il doit être affiché et avoir la classe 'vtmn-alert_content-title'
  test('Should pass attributes into the component', () => {
    const { getByText } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      'aria-labelledby': 'unit-tests',
    });
    expect(getByText('Alert unit-test')).toBeVisible();
    expect(getByText('Alert unit-test')).toHaveClass(
      'vtmn-alert_content-title',
    );
  });

  // Par défaut, s'il n'y a pas de description, il n'y a pas de class 'vtmn-alert_content-description'
  test("Should not have class 'vtmn-alert_content-description' if no description are provide", () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
    });
    expect(getDescription(container)).toBeUndefined();
  });

  // Si description est à true, il doit y avoir une class 'vtmn-alert_content-description'
  test("Should not have class 'vtmn-alert_content-description' if no description are provide", () => {
    const { getByText } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      description: 'Description',
    });
    expect(getByText('Description')).toBeVisible();
    expect(getByText('Description')).toHaveClass(
      'vtmn-alert_content-description',
    );
  });

  // Par défaut il n'y a pas de bouton
  test('Should not have a close button by default', () => {
    const { container } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
    });
    expect(container.getElementsByClassName('vtmn-btn')[0]).toBeUndefined();
  });

  // Si with close button est affiché, il doit y avoir un bouton
  test('Should have a close button if withCloseButton = true', () => {
    const { getByLabelText } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      withCloseButton: true,
    });
    expect(getByLabelText('Close alert')).toBeVisible();
  });

  // Au click sur le bouton, une action close doit être lancée
  test('Should trigger close action on click on button', async () => {
    const { getByLabelText, component } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout,
      withCloseButton: true,
    });
    await expectedCloseOnElement(getByLabelText('Close alert'), component, 1);
  });

  // Après la fin du timeout, une action close doit être lancée
  test('Should trigger automatically close action when the timeout are done', async () => {
    const handleClick = jest.fn();
    const { getByLabelText, component } = render(VtmnAlertItem, {
      title: 'Alert unit-test',
      timeout: 50,
      withCloseButton: true,
    });
    component.$on('close', handleClick);
    expect(handleClick).toHaveBeenCalledTimes(0);
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1), {
      timeout: 100,
    });
  });
});
