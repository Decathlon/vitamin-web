import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/toast.csf';
import { VtmnToast } from '@vtmn/react';
import { VtmnButton } from '@vtmn/react';

const CSS_ANIMATION_TIME_MS = 500;

export default {
  title: 'Components / Overlays / VtmnToast',
  component: VtmnToast,
  argTypes,
  parameters,
} as Meta;

const OverviewTemplate: Story = (args) => {
  const [showToast, setshowToast] = useState<boolean>(false);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setshowToast(false);
      }, args.timeout + CSS_ANIMATION_TIME_MS);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  return (
    <div>
      <VtmnButton onClick={() => setshowToast(true)}>Display toast</VtmnButton>
      {showToast && <VtmnToast onClose={() => setshowToast(false)} {...args} />}
    </div>
  );
};

export const Overview = OverviewTemplate.bind({});
Overview.args = {};
