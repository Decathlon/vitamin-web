import React, { useState } from 'react';
import {
  VtmnButton,
  VtmnModal,
  VtmnModalTitle,
  VtmnModalDescription,
  VtmnModalActions,
} from '@vtmn/react';
import { Meta, Story } from '@storybook/react';
import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/overlays/modal.csf';

export default {
  title: 'Components / Overlays / VtmnModal',
  component: VtmnModal,
  argTypes: {
    ...argTypes,
    onClose: {
      type: { name: 'string', required: false },
      description: 'Called when user action should close the modal',
      control: {
        type: 'function',
      },
    },
  },
  parameters,
} as Meta;

const Template: Story = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <VtmnButton onClick={() => setOpen(true)}>Display modal</VtmnButton>
      <VtmnModal
        {...args}
        open={open}
        onClose={() => {
          console.log('Modal closed');
          setOpen(false);
        }}
      >
        <VtmnModalTitle>This is the title</VtmnModalTitle>

        <VtmnModalDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
          exercitationem accusamus perferendis est aut repudiandae optio vel
          dicta reprehenderit ad, repellendus officiis cumque omnis labore in
          quia?
        </VtmnModalDescription>

        <VtmnModalActions>
          <VtmnButton
            variant="secondary"
            onClick={() => {
              console.log('Go back clicked');
              setOpen(false);
            }}
          >
            Go Back
          </VtmnButton>

          <VtmnButton
            variant="primary"
            onClick={() => {
              console.log('Yes, I understand clicked');

              setOpen(false);
            }}
          >
            Yes, I understand
          </VtmnButton>
        </VtmnModalActions>
      </VtmnModal>
    </div>
  );
};

export const Overview = Template.bind({});
