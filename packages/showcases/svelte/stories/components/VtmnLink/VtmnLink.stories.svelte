<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnLink } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/VtmnLink.csf';

  const linkArgs = {
    href: 'https://decathlon.design',
    target: '_blank',
  };
</script>

<Meta title="Components/VtmnLink" component={VtmnLink} {parameters} />

<Template let:args>
  <div>
    <VtmnLink {...args}>Link</VtmnLink>
  </div>
</Template>

<Story name="Overview" args={linkArgs} />
