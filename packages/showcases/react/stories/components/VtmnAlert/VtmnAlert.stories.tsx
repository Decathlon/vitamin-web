import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnAlert.csf';
import VtmnAlert from '@vtmn/react/src/components/VtmnAlert/VtmnAlert';
import { VtmnButton } from '@vtmn/react';

export default {
  title: 'Components/VtmnAlert',
  component: VtmnAlert,
  argTypes: { ...argTypes },
  parameters,
} as Meta;

const OverviewTemplate: Story = (args) => <VtmnAlert {...args} />;

const DemoTemplate: Story = (args) => (
  <div>
    <VtmnButton onClick={() => handleTriggerAlertClick()}>
      Trigger Alert
    </VtmnButton>
    <VtmnAlert {...args} />
  </div>
);

export const InfoClosable = OverviewTemplate.bind({});
InfoClosable.args = {
  type: 'info',
  closable: true,
  title: 'Alert info closable',
  message: 'Test message info closable',
};

export const WarningNotClosable = OverviewTemplate.bind({});
WarningNotClosable.args = {
  type: 'warning',
  title: 'Alert warning not closable',
  message: 'Test message warning not closable',
};

export const SuccessClosableNoMessage = OverviewTemplate.bind({});
SuccessClosableNoMessage.args = {
  type: 'success',
  closable: true,
  title: 'Alert success closable no message',
};

export const DangerNotClosableNoMessage = OverviewTemplate.bind({});
DangerNotClosableNoMessage.args = {
  type: 'danger',
  title: 'Alert danger not closable no message',
};

export const Demo = DemoTemplate.bind({});
Demo.args = {
  type: 'warning',
  title: 'Alert warning closable triggering test',
  message: 'This is a test message',
  closable: true,
  showAlert: false,
};
