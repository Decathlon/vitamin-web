import { VtmnLink } from '@vtmn/react';

import { Meta, Story } from '@storybook/react';

import VtmnLinkCsf from '../../../../core/src/components/VtmnLink.csf';

export default VtmnLinkCsf(VtmnLink) as Meta;

const Template: Story = (args) => <VtmnLink {...args} />;

export const Overview = Template.bind({});
