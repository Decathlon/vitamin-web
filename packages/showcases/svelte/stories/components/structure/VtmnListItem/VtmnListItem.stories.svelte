<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import { VtmnButton, VtmnList, VtmnListItem } from '@vtmn/svelte';
</script>

<Meta
  title="Components / Structure / VtmnListItem"
  component={VtmnListItem}
  argTypes={{
    size: {
      description: 'Sizing variant of list item.',
      defaultValue: 'medium',
    },
    hideDivider: {
      description: 'Hide divider.',
      defaultValue: false,
    },
    index: {
      description: 'Index of item in list.',
      type: { required: true },
      defaultValue: 0,
    },

    disabled: {
      description: 'Disable list item.',
      defaultValue: false,
    },
    primaryLabel: {
      description: 'Primary text label.',
      defaultValue: 'Lorem ipsum',
      type: { required: true },
    },
    secondaryLabel: {
      description: 'Primary text.',
      defaultValue: 'Lorem ipsum dolor sit amet',
    },
  }}
  parameters={{
    actions: {
      handles: ['mouseover', 'click'],
    },
  }}
/>

<Template let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      <VtmnListItem
        {...args}
        on:click={() => console.log(`List item ${args.index} clicked !`)}
      />
    </VtmnList>
  </div>
</Template>

<Story name="Overview" />

<Story name="With slots" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      {#each [0, 1, 2] as item}
        <VtmnListItem
          {...{ ...args, index: item }}
          on:click={() => console.log(`List item ${args.index} clicked !`)}
        >
          <VtmnButton
            iconAlone="heart-line"
            variant="ghost"
            slot="start-action"
            on:click={() =>
              console.log(`List item button ${args.index} clicked !`)}
          />

          <VtmnButton
            slot="end-action"
            on:click={() =>
              console.log(`List item button ${args.index} clicked !`)}
            >Button</VtmnButton
          >
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="Slots with image" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      <VtmnListItem
        {...args}
        on:click={() => console.log(`List item ${args.index} clicked !`)}
      >
        <img
          slot="start-action"
          class="vtmn-list_media--circle"
          src="https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg"
          alt="placeholder"
        />

        <VtmnButton
          slot="end-action"
          iconAlone="heart-line"
          variant="ghost"
          on:click={() =>
            console.log(`List item button ${args.index} clicked !`)}
        />
      </VtmnListItem>
    </VtmnList>
  </div>
</Story>

<Story name="Small size" args={{ size: 'small' }} />

<Story name="Hide divider" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      <VtmnListItem {...{ ...args, hideDivider: true }} />
      <VtmnListItem {...{ ...args, hideDivider: true }} />
      <VtmnListItem {...{ ...args, hideDivider: true }} />
    </VtmnList>
  </div>
</Story>

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Without secondary text" args={{ secondaryLabel: null }} />
