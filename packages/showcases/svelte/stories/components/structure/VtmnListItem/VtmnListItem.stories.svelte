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
      >
        <span slot="text">Lorem ipsum</span>
        <span slot="text-secondary">Lorem ipsum dolor sit amet</span>
      </VtmnListItem>
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
            slot="start-visual"
            on:click={() =>
              console.log(`List item button ${args.index} clicked !`)}
          />

          <span slot="text">Lorem ipsum</span>
          <span slot="text-secondary">Lorem ipsum dolor sit amet</span>

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
          slot="start-visual"
          class="vtmn-list_media--circle"
          src="https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg"
          alt="placeholder"
        />

        <span slot="text">Lorem ipsum</span>
        <span slot="text-secondary">Lorem ipsum dolor sit amet</span>

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
      <VtmnListItem {...{ ...args, hideDivider: true }}>
        <span slot="text">Lorem ipsum</span>
        <span slot="text-secondary">Lorem ipsum dolor sit amet</span>
      </VtmnListItem>
      <VtmnListItem {...{ ...args, hideDivider: true }}>
        <span slot="text">Lorem ipsum</span>
        <span slot="text-secondary">Lorem ipsum dolor sit amet</span>
      </VtmnListItem>
      <VtmnListItem {...{ ...args, hideDivider: true }}>
        <span slot="text">Lorem ipsum</span>
        <span slot="text-secondary">Lorem ipsum dolor sit amet</span>
      </VtmnListItem>
    </VtmnList>
  </div>
</Story>

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Without secondary text" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      <VtmnListItem {...args}>
        <span slot="text">Lorem ipsum</span>
      </VtmnListItem>
      <VtmnListItem {...args}>
        <span slot="text">Lorem ipsum</span>
      </VtmnListItem>
      <VtmnListItem {...args}>
        <span slot="text">Lorem ipsum</span>
      </VtmnListItem>
    </VtmnList>
  </div>
</Story>
