<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { vtmnAlertStore, VtmnAlert, VtmnButton } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/overlays/alert.csf';
  const argTypes = {
    title: {
      type: { name: 'string', required: true },
      description: 'Title of the modal',
      defaultValue: 'This is the title of the alert',
      control: { type: 'text' },
    },
    description: {
      type: { name: 'string', required: true },
      description: 'This is the description of the alert',
      defaultValue:
        'Alert are used to draw the users attention to an important information',
      control: { type: 'text' },
    },
    withCloseButton: {
      type: { name: 'boolean', required: true },
      description: 'Show close button',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    variant: {
      type: { name: 'boolean', required: false },
      description: 'Variant of the alert',
      defaultValue: 'info',
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'danger'],
      },
    },
  };
</script>

<Meta
  title="Components / Overlays / VtmnAlert"
  component={VtmnAlert}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnButton
    on:click={() => {
      vtmnAlertStore.send({
        ...args,
        'aria-labelledby': 'Storybook',
        'aria-describedby': args.variant,
      });
    }}>Display alert</VtmnButton
  >
  <VtmnAlert {...args} />
</Template>

<Story name="Overview" />
