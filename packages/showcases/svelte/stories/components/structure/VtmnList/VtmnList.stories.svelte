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
        <VtmnListItem>
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
        <VtmnListItem
          role="button"
          on:click={(e) => console.log('Click on list element')}
        >
          <VtmnButton
            iconAlone="heart-line"
            variant="ghost"
            slot="start-visual"
            on:keydown={(e) => {
              e.stopPropagation();
            }}
            on:click={(e) => {
              e.stopPropagation();
              console.log(`List item button ${buttonText} clicked !`);
            }}
          />

          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>

          <VtmnButton
            slot="end-action"
            on:keydown={(e) => e.stopPropagation()}
            on:click={(e) => {
              e.stopPropagation();
              console.log(`List item button ${buttonText} clicked !`);
            }}>{buttonText}</VtmnButton
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
        <VtmnListItem size="small">
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
        <VtmnListItem divider={false}>
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
        <VtmnListItem disabled>
          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="With links" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each listItems() as { }, index}
        <VtmnListItem
          href="/"
          target="_blank"
          aria-label="Redirection link {index}"
          role="button"
          on:click={(e) => console.log('Click on list element')}
          on:keydown={(e) => e.stopPropagation()}
        >
          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>
          <VtmnButton
            slot="end-action"
            on:keydown={(e) => e.stopPropagation()}
            on:click={(e) => {
              e.stopPropagation();
              console.log(`List item button clicked !`);
            }}>Button</VtmnButton
          >
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="With links disabled and without divider" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each listItems() as { }, index}
        <VtmnListItem
          href="/"
          target="_blank"
          disabled
          aria-label="Redirection link {index}"
        >
          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>
