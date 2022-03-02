<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnButton, VtmnList, VtmnListItem } from '@vtmn/svelte';

  const basicList = () =>
    new Array(3).fill(0).map((_) => ({
      primaryLabel: 'Lorem ipsum',
      secondaryLabel: 'Lorem ipsum dolor sit amet',
    }));

  const buttonList = () =>
    new Array(3).fill(0).map((_, index) => ({
      primaryLabel: 'Lorem ipsum',
      secondaryLabel: 'Lorem ipsum dolor sit amet',
      buttonText: `button  ${index + 1}`,
    }));
</script>

<Meta title="Components / Structure / VtmnList" component={VtmnList} />

<Story name="Overview">
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each basicList() as { primaryLabel, secondaryLabel }, index}
        <VtmnListItem {primaryLabel} {secondaryLabel} {index} />
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="With slots">
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each buttonList() as { primaryLabel, secondaryLabel, buttonText }, index}
        <VtmnListItem {primaryLabel} {secondaryLabel} {index}>
          <VtmnButton
            iconAlone="heart-line"
            variant="ghost"
            slot="start-visual"
            on:click={() =>
              console.log(`List item button ${buttonText} clicked !`)}
          />

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
      {#each basicList() as { primaryLabel, secondaryLabel }, index}
        <VtmnListItem {primaryLabel} {secondaryLabel} {index} size="small" />
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="Hide divider" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each basicList() as { primaryLabel, secondaryLabel }, index}
        <VtmnListItem {primaryLabel} {secondaryLabel} {index} hideDivider />
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="Disabled" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each basicList() as { primaryLabel, secondaryLabel }, index}
        <VtmnListItem {primaryLabel} {secondaryLabel} {index} disabled />
      {/each}
    </VtmnList>
  </div>
</Story>
