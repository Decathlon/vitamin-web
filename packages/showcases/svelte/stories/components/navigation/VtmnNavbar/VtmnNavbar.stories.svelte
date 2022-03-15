<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/navigation/navbar.csf';
  import { VtmnButton, VtmnNavbar } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Navigation / VtmnNavbar"
  component={VtmnNavbar}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <div style="width: 800px; display: flex; justify-content: center">
    <VtmnNavbar {...args} />
  </div>
</Template>

<Story name="Overview" args={{ logo: true }} />

<Story name="With menu and cta" let:args>
  <div style="width: 800px; display: flex; justify-content: center">
    <VtmnNavbar
      {...(args, { navMenu: true, logo: true, search: true })}
      on:toggleMenu={(event) =>
        alert('ToggleMenu event fired ! :' + event.detail.state)}
      on:input={(e) => console.log(e.target.value)}
      on:search={(event) => alert('Search event fired ! :' + event.detail.text)}
    >
      <svelte:fragment slot="call-to-action">
        <VtmnButton iconAlone="heart-line" variant="ghost" />

        <VtmnButton iconAlone="heart-line" variant="ghost" />

        <VtmnButton iconAlone="heart-line" variant="ghost" />
      </svelte:fragment>
    </VtmnNavbar>
  </div>
</Story>

<Story name="With menu and button" let:args>
  <div style="width: 800px; display: flex; justify-content: center">
    <VtmnNavbar
      on:toggleMenu={(event) =>
        alert('ToggleMenu event fired ! :' + event.detail.state)}
      {...(args, { navMenu: true, logo: true, search: true })}
      on:input={(e) => console.log(e.target.value)}
      on:search={(event) =>
        alert('Search event fired ! : ' + event.detail.text)}
    >
      <svelte:fragment slot="call-to-action">
        <VtmnButton variant="ghost">button 1</VtmnButton>

        <VtmnButton>button 2</VtmnButton>

        <VtmnButton variant="conversion">button 3</VtmnButton>
      </svelte:fragment>
    </VtmnNavbar>
  </div>
</Story>
