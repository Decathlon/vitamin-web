<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnRating } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/indicators/rating.csf';
</script>

<Meta
  title="Components / Indicators / VtmnRating"
  component={VtmnRating}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <VtmnRating {...args} />
</Template>

<Story name="Overview" />

<Story name="Interactive">
  <VtmnRating
    class="rating-stories"
    name="story-interfactive-1"
    emphasis
    size="medium"
    value={0}
  />
  <VtmnRating
    class="rating-stories"
    name="story-interfactive-2"
    emphasis
    size="small"
    value={0}
  />
  <VtmnRating
    class="rating-stories"
    name="story-interfactive-3"
    emphasis
    disabled
    value={0}
  />
</Story>

<Story name="Read only with comments">
  <VtmnRating class="rating-stories" readonly compact value={4.1} showValue />
  <VtmnRating class="rating-stories" readonly compact value={1} showValue />
  <VtmnRating
    class="rating-stories"
    size="small"
    readonly
    compact
    value={2.9}
    comments="(74)"
    showValue
  />
  <VtmnRating
    class="rating-stories"
    emphasis
    readonly
    compact
    value={5}
    comments="(74)"
  />
  <VtmnRating
    class="rating-stories"
    emphasis
    readonly
    value={2.3}
    showValue
    comments="(74)"
  />
</Story>

<Story name="Read only">
  <div class="rating-story-align">
    <div>
      <VtmnRating class="rating-stories" readonly size="small" value={0} />
      <VtmnRating class="rating-stories" readonly size="small" value={0.5} />
      <VtmnRating class="rating-stories" readonly size="small" value={1} />
      <VtmnRating class="rating-stories" readonly size="small" value={1.5} />
      <VtmnRating class="rating-stories" readonly size="small" value={2} />
      <VtmnRating class="rating-stories" readonly size="small" value={2.5} />
    </div>
    <div>
      <VtmnRating class="rating-stories" readonly emphasis value={3} />
      <VtmnRating class="rating-stories" readonly emphasis value={3.5} />
      <VtmnRating class="rating-stories" readonly emphasis value={4} />
      <VtmnRating class="rating-stories" readonly emphasis value={4.5} />
      <VtmnRating class="rating-stories" readonly emphasis value={5} />
    </div>
  </div>
</Story>

<style>
  :global(.rating-stories) {
    margin: 16px 0;
  }
  .rating-story-align {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 400px;
  }
</style>
