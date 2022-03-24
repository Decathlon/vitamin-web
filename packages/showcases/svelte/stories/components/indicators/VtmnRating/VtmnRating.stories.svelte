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
    rating={0}
  />
  <VtmnRating
    class="rating-stories"
    name="story-interfactive-2"
    emphasis
    size="small"
    rating={0}
  />
  <VtmnRating
    class="rating-stories"
    name="story-interfactive-3"
    emphasis
    disabled
    rating={0}
  />
</Story>

<Story name="Read Only with text">
  <VtmnRating class="rating-stories" readonly compact rating={1}>
    <span slot="primary">4.1/5</span>
  </VtmnRating>
  <VtmnRating class="rating-stories" readonly compact rating={0.1}>
    <span slot="primary">1/5</span>
  </VtmnRating>
  <VtmnRating class="rating-stories" size="small" readonly compact rating={1}>
    <span slot="primary">2.9/5</span>
    <span slot="secondary">(74)</span>
  </VtmnRating>
  <VtmnRating class="rating-stories" emphasis readonly compact rating={1}>
    <span slot="primary">74 ratings</span>
  </VtmnRating>
  <VtmnRating class="rating-stories" emphasis readonly rating={2.3}>
    <span slot="primary">2.3/5</span>
    <span slot="secondary">(74)</span>
  </VtmnRating>
</Story>

<Story name="Read only">
  <div class="rating-story-align">
    <div>
      <VtmnRating class="rating-stories" readonly size="small" rating={0} />
      <VtmnRating class="rating-stories" readonly size="small" rating={0.5} />
      <VtmnRating class="rating-stories" readonly size="small" rating={1} />
      <VtmnRating class="rating-stories" readonly size="small" rating={1.5} />
      <VtmnRating class="rating-stories" readonly size="small" rating={2} />
      <VtmnRating class="rating-stories" readonly size="small" rating={2.5} />
    </div>
    <div>
      <VtmnRating class="rating-stories" readonly emphasis rating={3} />
      <VtmnRating class="rating-stories" readonly emphasis rating={3.5} />
      <VtmnRating class="rating-stories" readonly emphasis rating={4} />
      <VtmnRating class="rating-stories" readonly emphasis rating={4.5} />
      <VtmnRating class="rating-stories" readonly emphasis rating={5} />
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
