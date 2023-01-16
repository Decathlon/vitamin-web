import { VtmnList, VtmnListItem, VtmnButton } from '@vtmn/vue';
import { parameters } from '@vtmn/showcase-core/csf/components/structure/list.csf';
import React from 'react';

export default {
  title: 'Components / Structure / VtmnList',
  component: VtmnList,
  parameters,
};

const Template = (args, listArgs) => ({
  components: { VtmnList, VtmnListItem },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center">
    <VtmnList v-bind="args">
      <VtmnListItem href="/" target="_blank" rel="noopener noreferrer">
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
      </VtmnListItem>
      <VtmnListItem href="/" target="_blank" rel="noopener noreferrer">
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
      </VtmnListItem>
      <VtmnListItem href="/" target="_blank" rel="noopener noreferrer">
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
      </VtmnListItem>
    </VtmnList>
  </div>`,
});

export const Overview = Template.bind({});
Overview.args = {};

export const WithLinks = Template.bind({});
WithLinks.args = {};

const WithDisabledLinkListTemplate = (args, listArgs) => ({
  components: { VtmnList, VtmnListItem, VtmnButton },
  setup() {
    return { args };
  },
  template: `<div style="width: 400px; display: flex; justify-content: center">
    <VtmnList v-bind="args">
      <VtmnListItem href="/" disabled aria-label="List item 1" target="_blank" rel="noopener noreferrer">
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
        <template v-slot:end-action>
          <VtmnButton variant="primary" disabled>Button</VtmnButton>
        </template>
      </VtmnListItem>
      <VtmnListItem href="/" disabled aria-label="List item 2" target="_blank" rel="noopener noreferrer">
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
        <template v-slot:end-action>
          <VtmnButton variant="primary" disabled>Button</VtmnButton>
        </template>
      </VtmnListItem>
      <VtmnListItem href="/" disabled aria-label="List item 3" target="_blank" rel="noopener noreferrer">
        <template v-slot:text><span>Lorem ipsum</span></template>
        <template v-slot:subtext><span>Lorem ipsum dolor sit amet</span></template>
        <template v-slot:end-action>
          <VtmnButton variant="primary" disabled>Button</VtmnButton>
        </template>
      </VtmnListItem>
    </VtmnList>
  </div>`,
});

export const WithDisabledLinkList = WithDisabledLinkListTemplate.bind({});
WithLinks.args = {};
