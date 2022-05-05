import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/snackbar.csf';
import { VtmnSnackbar } from '@vtmn/react';
import { VtmnButton } from '@vtmn/react';

export default {
  title: 'Components / Overlays / VtmnSnackbar',
  component: VtmnSnackbar,
  argTypes,
  parameters,
} as Meta;

const OverviewTemplate: Story = (args) => {
  const [showSnackbar, setshowSnackbar] = useState<boolean>(false);

  useEffect(() => {
    if (showSnackbar) {
      const timeout = setTimeout(() => {
        setshowSnackbar(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [showSnackbar]);

  return (
    <div>
      <VtmnButton onClick={() => setshowSnackbar(true)}>
        Display snackbar
      </VtmnButton>
      {showSnackbar && (
        <VtmnSnackbar onClose={() => setshowSnackbar(false)} {...args} />
      )}
    </div>
  );
};

export const Overview = OverviewTemplate.bind({});
Overview.args = {};
