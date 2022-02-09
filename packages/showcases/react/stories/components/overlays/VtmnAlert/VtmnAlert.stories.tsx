import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/alert.csf';
import VtmnAlert from '@vtmn/react';
import { VtmnButton } from '@vtmn/react';

export default {
  title: 'Components / Overlays / VtmnAlert',
  component: VtmnAlert,
  argTypes: { ...argTypes },
  parameters,
} as Meta;

const OverviewTemplate: Story = (args) => <VtmnAlert {...args} />;

const DemoTemplate: Story = (args) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <div>
      <VtmnButton onClick={() => setShowAlert(true)}>Trigger Alert</VtmnButton>
      {showAlert && <VtmnAlert onClose={() => setShowAlert(false)} {...args} />}
    </div>
  );
};

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
};
