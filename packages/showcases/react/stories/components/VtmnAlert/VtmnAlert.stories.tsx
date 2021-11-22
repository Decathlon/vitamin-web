import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/VtmnAlert.csf';
import VtmnAlert from '@vtmn/react/src/components/VtmnAlert/VtmnAlert';

export default {
  title: 'Components/VtmnAlert',
  component: VtmnAlert,
  argTypes: { ...argTypes },
  parameters,
} as Meta;

const Template: Story = (args) => <VtmnAlert {...args} />;

export const InfoClosable = Template.bind({});
InfoClosable.args = {
  type: 'info',
  closable: true,
  title: 'Alert info closable',
  message: 'Test message info closable',
};

export const WarningNotClosable = Template.bind({});
WarningNotClosable.args = {
  type: 'warning',
  title: 'Alert warning not closable',
  message: 'Test message warning not closable',
};

export const SuccessClosableNoMessage = Template.bind({});
SuccessClosableNoMessage.args = {
  type: 'success',
  closable: true,
  title: 'Alert success closable no message',
};

export const DangerNotClosableNoMessage = Template.bind({});
DangerNotClosableNoMessage.args = {
  type: 'danger',
  title: 'Alert danger not closable no message',
};

<>
  <div className="block">
    <VtmnAlert
      message={'Test message info closable'}
      title={'Alert info closable'}
      type={'info'}
      closable={true}
    />
  </div>

  <div className="block">
    <VtmnAlert
      message={'Test message warning not closable'}
      title={'Alert warning not closable'}
      type={'warning'}
    />
  </div>

  <div className="block">
    <VtmnAlert
      title={'Alert success closable no message'}
      type={'success'}
      closable={true}
    />
  </div>

  <div className="block">
    <VtmnAlert title={'Alert danger not closable no message'} type={'danger'} />
  </div>
</>;
