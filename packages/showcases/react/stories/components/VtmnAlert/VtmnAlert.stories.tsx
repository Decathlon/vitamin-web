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

const Template: Story = (args) => (
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
        closable={false}
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
      <VtmnAlert
        title={'Alert danger not closable no message'}
        type={'danger'}
        closable={false}
      />
    </div>
  </>
);

export const Overview = Template.bind({});
