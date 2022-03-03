<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnButton, VtmnList, VtmnListItem } from '@vtmn/svelte';

  const listItems = () =>
    new Array(3).fill(0).map((_, index) => ({
      buttonText: `button  ${index + 1}`,
    }));
</script>

<Meta title="Components / Structure / VtmnList" component={VtmnList} />

<Story name="Overview">
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each listItems() as { }, index}
        <VtmnListItem {index}>
          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="With slots">
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each listItems() as { buttonText }, index}
        <VtmnListItem {index}>
          <VtmnButton
            iconAlone="heart-line"
            variant="ghost"
            slot="start-visual"
            on:click={() =>
              console.log(`List item button ${buttonText} clicked !`)}
          />

          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>

          <VtmnButton
            slot="end-action"
            on:click={() =>
              console.log(`List item button ${buttonText} clicked !`)}
            >{buttonText}</VtmnButton
          >
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="Small size" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each listItems() as { }, index}
        <VtmnListItem {index} size="small">
          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="Without dividers " let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each listItems() as { }, index}
        <VtmnListItem {index} divider={false}>
          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="Disabled" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each listItems() as { }, index}
        <VtmnListItem {index} disabled>
          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>
