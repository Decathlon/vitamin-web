<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { VtmnTabs, VtmnTabsItem, VtmnBadge } from '@vtmn/svelte';
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
    <VtmnTabs {...args}>
      {#each tabItems() as { tabText }, index}
        <VtmnTabsItem {index}>
          {tabText}
        </VtmnTabsItem>
      {/each}
    </VtmnTabs>
  </div>
</Template>

<Template let:args>
  <div class="block">
    <VtmnTabs {...args}>
      {#each tabItems() as { tabText }, index}
        <VtmnTabsItem {index}>
          <span aria-hidden="true" class="vtmx-heart-line" />
          {tabText}
        </VtmnTabsItem>
      {/each}
    </VtmnTabs>
  </div>
</Template>

<Template let:args>
  <div class="block">
    <VtmnTabs {...args}>
      {#each tabItems() as { tabText }, index}
        <VtmnTabsItem {index}>
          <span aria-hidden="true" class="vtmx-heart-line" />
          {tabText}
          <VtmnBadge value={6} />
        </VtmnTabsItem>
      {/each}
    </VtmnTabs>
  </div>
</Template>

<Template let:args>
  <div class="block">
    <VtmnTabs {...args}>
      <VtmnTabsItem>
        <span aria-hidden="true" class="vtmx-heart-line" />
        Tab Name 1
      </VtmnTabsItem>
      <VtmnTabsItem>
        Tab Name 2
        <VtmnBadge value={6} />
      </VtmnTabsItem>
      <VtmnTabsItem>Tab Name 3</VtmnTabsItem>
      <VtmnTabsItem>
        <span aria-hidden="true" class="vtmx-heart-line" />
        Tab Name 4
        <VtmnBadge value={99} />
      </VtmnTabsItem>
      <VtmnTabsItem>
        <span aria-hidden="true" class="vtmx-heart-line" />
        Tab Name 5
        <VtmnBadge value={99} />
      </VtmnTabsItem>
      <VtmnTabsItem>
        <span aria-hidden="true" class="vtmx-heart-line" />
        Tab Name 6
        <VtmnBadge value={99} />
      </VtmnTabsItem>
    </VtmnTabs>
  </div>
</Template>

<Story name="Overview" />
