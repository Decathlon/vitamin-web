<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { VtmnTabs, VtmnTabsItem } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/navigation/tabs.csf';

  const tabItems = () =>
    new Array(4).fill(0).map((_, index) => ({
      tabText: `Tab Name  ${index + 1}`,
    }));
</script>

<Meta
  title="Components / Navigation / VtmnTabs"
  component={VtmnTabs}
  {argTypes}
  {parameters}
/>

<Template let:args>
  <div class="block">
    <VtmnTabs aria-label="Tabs list" {...args}>
      {#each tabItems() as { tabText }, index}
        <VtmnTabsItem on:click={() => action('click')(index.toString())}>
          {tabText}
        </VtmnTabsItem>
      {/each}
    </VtmnTabs>
  </div>
</Template>

<Template let:args>
  <div class="block">
    <VtmnTabs aria-label="Tabs list" {...args}>
      {#each tabItems() as { tabText }, index}
        <VtmnTabsItem
          on:click={() => action('click')(index.toString())}
          icon="heart-line"
        >
          {tabText}
        </VtmnTabsItem>
      {/each}
    </VtmnTabs>
  </div>
</Template>

<Template let:args>
  <div class="block">
    <VtmnTabs aria-label="Tabs list" {...args}>
      {#each tabItems() as { tabText }, index}
        <VtmnTabsItem
          on:click={() => action('click')(index.toString())}
          icon="heart-line"
          badge={6}
        >
          {tabText}
        </VtmnTabsItem>
      {/each}
    </VtmnTabs>
  </div>
</Template>

<Template let:args>
  <div class="block">
    <VtmnTabs aria-label="Tabs list" {...args}>
      <VtmnTabsItem
        on:click={() => action('click')('1')}
        icon="calendar-date-fill"
      >
        Tab Name 1
      </VtmnTabsItem>
      <VtmnTabsItem on:click={() => action('click')('2')} badge={6}>
        Tab Name 2
      </VtmnTabsItem>
      <VtmnTabsItem on:click={() => action('click')('3')}
        >Tab Name 3</VtmnTabsItem
      >
      <VtmnTabsItem
        on:click={() => action('click')('4')}
        icon="checkbox-circle-line"
        badge={99}>Tab Name 4</VtmnTabsItem
      >
      <VtmnTabsItem
        on:click={() => action('click')('5')}
        icon="close-circle-line"
        badge={99}
      >
        Tab Name 5
      </VtmnTabsItem>
      <VtmnTabsItem
        on:click={() => action('click')('6')}
        icon="error-warning-line"
        badge={99}
      >
        Tab Name 6
      </VtmnTabsItem>
    </VtmnTabs>
  </div>
</Template>

<Story name="Overview" />
