<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnSkeleton, VtmnCard } from '@vtmn/svelte';
  import {
    argTypes,
    parameters,
  } from '@vtmn/showcase-core/csf/components/structure/skeleton.csf';
</script>

<Meta
  title="Components / Structure / VtmnSkeleton"
  component={VtmnSkeleton}
  {parameters}
  {argTypes}
/>
<Story name="Overview" let:args>
  <div
    class="vtmn-flex vtmn-shadow-200 vtmn-bg-background-primary vtmn-rounded-lg vtmn-p-4 vtmn-mb-5 vtmn-items-center vtmn-content-center"
    style="width:200px;"
  >
    <VtmnSkeleton {...args} />
  </div>
</Story>

<Story name="With avatar" let:args>
  <div class="post-example">
    <VtmnSkeleton shape="avatar" />
    <div class="post-example_body">
      <VtmnSkeleton shape="line" width="55" />
      <p class="vtmn-mt-2">
        <VtmnSkeleton shape="line" width="84" />
        <VtmnSkeleton shape="line" width="90" />
        <VtmnSkeleton shape="line" width="83" />
        <VtmnSkeleton shape="line" width="60" />
      </p>
    </div>
  </div>
</Story>

<Story name="With card" let:args>
  <div id="skeleton-card-container">
    <VtmnCard class="skeleton-card">
      <svelte:fragment slot="img">
        <VtmnSkeleton class="skeleton-card-image" width="100" />
      </svelte:fragment>

      <svelte:fragment slot="content">
        <VtmnSkeleton width="95" />
        <VtmnSkeleton width="70" />
      </svelte:fragment>
    </VtmnCard>
  </div>
</Story>

<style>
  .post-example {
    display: flex;
    width: 400px;
    border-radius: var(--vtmn-radius_200);
    padding: var(--vtmn-spacing_4);
    background-color: var(--vtmn-semantic-color_background-primary);
  }
  .post-example_body {
    flex-grow: 1;
    margin-left: var(--vtmn-spacing_4);
  }
  #skeleton-card-container :global(.skeleton-card-image) {
    height: 100%;
  }
  #skeleton-card-container :global(.skeleton-card) {
    width: 300px;
  }
  #skeleton-card-container :global(.skeleton-card .vtmn-card_image) {
    aspect-ratio: 1;
    width: calc(100% - 32px);
  }

  :global(#anchor--components-structure-vtmnskeleton--with-card .docs-story),
  :global(#anchor--components-structure-vtmnskeleton--with-card
      .docs-story
      > div:first-child) {
    height: 500px;
  }
</style>
