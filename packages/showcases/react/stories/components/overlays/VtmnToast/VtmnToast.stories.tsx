import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/toast.csf';
import { VtmnToast } from '@vtmn/react/src/components/overlays/VtmnToast/VtmnToast';

export default {
  title: 'Components / Overlays / VtmnToast',
  component: VtmnToast,
  argTypes,
  parameters,
} as Meta;

const OverviewTemplate: Story = (args) => (
  <VtmnToast
    content={''}
    onClose={function (): void {
      throw new Error('Function not implemented.');
    }}
    {...args}
  />
);

const DemoTemplate: Story = (args) => {
  const [showToast, setshowToast] = useState<boolean>(false);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setshowToast(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  return (
    showToast && (
      <VtmnToast content={''} onClose={() => setshowToast(false)} {...args} />
    )
  );
};

export const Overview = OverviewTemplate.bind({});
export const Demo = DemoTemplate.bind({});
Overview.args = {};
Demo.args = {};
