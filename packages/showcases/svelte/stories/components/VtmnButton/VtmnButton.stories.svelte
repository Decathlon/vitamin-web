<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnButton } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/VtmnButton.csf';
  import vitamixIcons from '@vtmn/icons/dist/vitamix/font/vitamix.json';

  const buttonArgs = {
    variant: 'primary',
    size: 'medium',
  };
</script>

<Meta
  title="Components/VtmnButton"
  component={VtmnButton}
  argTypes={{
    iconLeft: {
      control: 'select',
      options: ['', ...Object.keys(vitamixIcons)],
    },
    iconRight: {
      control: 'select',
      options: ['', ...Object.keys(vitamixIcons)],
    },
    iconAlone: {
      control: 'select',
      options: ['', ...Object.keys(vitamixIcons)],
    },
  }}
  {parameters}
/>

<Template let:args>
  <div style="width: 400px; display: flex; justify-content: center">
    <VtmnButton {...args}>Button</VtmnButton>
  </div>
</Template>

<Story name="Overview" args={buttonArgs} />
