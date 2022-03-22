<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnTooltip } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/overlays/tooltip.csf';
</script>

<Meta
  title="Components / Overlay / VtmnTooltip"
  component={VtmnTooltip}
  {parameters}
  {argTypes}
/>
<Story name="Overview" let:args>
  <div
    class="block"
    style="
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: var(--vtmn-semantic-color_content-primary);
    "
  >
    <VtmnTooltip {...args}>
      <p aria-describedby="vtmn-tooltip-1">{args.position}</p>
    </VtmnTooltip>
  </div>
</Story>

<style>
</style>
