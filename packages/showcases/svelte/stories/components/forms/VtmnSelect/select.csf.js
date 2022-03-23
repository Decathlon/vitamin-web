export const argTypes = {
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the select.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  error: {
    type: { name: 'string', required: false },
    description: 'The error message displayed under the select.',
    defaultValue: '',
    control: { type: 'text' },
  },
  id: {
    type: { name: 'string', required: true },
    description: 'The id of the select',
    defaultValue: 'vtmn-select',
    control: { type: 'text' },
  },
  name: {
    type: { name: 'string', required: true },
    description: 'The name of the select',
    defaultValue: 'sports',
    control: { type: 'text' },
  },
  label: {
    type: { name: 'string', required: true },
    description: 'The label of the select.',
    defaultValue: 'Label',
    control: { type: 'text' },
  },
  autocomplete: {
    type: { name: 'boolean', required: false },
    description: 'Enable autocompletion on select',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  value: {
    type: { name: 'object', required: true },
    description: 'Selected value',
    defaultValue: '',
    control: { type: 'object' },
  },
};
