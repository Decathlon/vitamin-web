<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnLink } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/actions/link.csf';

  const linkArgs = {
    href: 'https://decathlon.design',
    target: '_blank',
  };
</script>

<Meta title="Components/VtmnLink" component={VtmnLink} {parameters} />

<Template let:args>
  <VtmnLink {...args}>Link</VtmnLink>
</Template>

<Story name="Overview" args={linkArgs} />
