import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/alert.csf';
import { VtmnAlert } from '@vtmn/react';
import { VtmnButton } from '@vtmn/react';

export default {
  title: 'Components / Overlays / VtmnAlert',
  component: VtmnAlert,
  argTypes,
  parameters,
} as Meta;

const OverviewTemplate: Story = (args) => {
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

export const Overview = OverviewTemplate.bind({});
Overview.args = {};
