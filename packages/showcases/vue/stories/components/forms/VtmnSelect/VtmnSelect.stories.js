import {
  argTypes,
  parameters,
} from '@vtmn/showcase-core/csf/components/forms/select.csf';
import { VtmnSelect } from '@vtmn/vue';

export default {
  title: 'Components / Forms / VtmnSelect',
  component: VtmnSelect,
  argTypes,
  parameters,
};

const options = [
  {
    label: 'Select',
    value: '',
    disabled: true,
  },
  {
    label: 'Gymnastics',
    value: 'gymnastics',
  },
  {
    label: 'Archery',
    value: 'archery',
  },
  {
    label: 'Climbing',
    value: 'climbing',
  },
  {
    label: 'Surf',
    value: 'surf',
  },
  {
    label: 'Badminton',
    value: 'badminton',
  },
  {
    label: 'Football',
    value: 'football',
  },
];

const Template = (args) => ({
  components: { VtmnSelect },
  setup() {
    return { args, options };
  },
  template: `<VtmnSelect style="width: 200px; display: flex; justify-content: center" :options="options" v-bind="args"></VtmnSelect>`,
});

export const Overview = Template.bind({});
Overview.args = {};
