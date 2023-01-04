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
    divider: {
      description: 'Without divider.',
      defaultValue: false,
    },
    disabled: {
      description: 'Disable list item.',
      defaultValue: false,
    },
    href: {
      description: 'Redirection link.',
      control: { type: 'text' },
    },
    target: {
      description: 'Target of the link.',
      control: { type: 'text' },
    },
    rel: {
      description: 'Rel of the link.',
      control: { type: 'text' },
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
        on:click={() => console.log(`List item 1 clicked !`)}
      >
        <span slot="text">Lorem ipsum</span>
        <span slot="subtext">Lorem ipsum dolor sit amet</span>
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
          {...args}
          on:click={() => console.log(`List item ${item} clicked !`)}
        >
          <VtmnButton
            iconAlone="heart-line"
            variant="ghost"
            slot="start-visual"
            on:click={() => console.log(`List item button ${item} clicked !`)}
          />

          <span slot="text">Lorem ipsum</span>
          <span slot="subtext">Lorem ipsum dolor sit amet</span>

          <VtmnButton
            slot="end-action"
            on:click={() => console.log(`List item button ${item} clicked !`)}
            >Button</VtmnButton
          >
        </VtmnListItem>
      {/each}
    </VtmnList>
  </div>
</Story>

<Story name="With image and slots" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      <VtmnListItem
        {...args}
        on:click={() => console.log(`List item 1 clicked !`)}
      >
        <img
          slot="start-visual"
          class="vtmn-list_media--circle"
          src="https://storage.googleapis.com/dkt-design-cdn/images/landscape-placeholder.jpg"
          alt="placeholder"
        />

        <span slot="text">Lorem ipsum</span>
        <span slot="subtext">Lorem ipsum dolor sit amet</span>

        <VtmnButton
          slot="end-action"
          iconAlone="heart-line"
          variant="ghost"
          on:click={() => console.log(`List item button 1 clicked !`)}
        />
      </VtmnListItem>
    </VtmnList>
  </div>
</Story>

<Story name="Small size" args={{ size: 'small' }} />

<Story name="Without divider" let:args>
  <div style="width: 700px; display: flex; justify-content: center">
    <VtmnList>
      <VtmnListItem {...{ ...args, divider: false }}>
        <span slot="text">Lorem ipsum</span>
        <span slot="subtext">Lorem ipsum dolor sit amet</span>
      </VtmnListItem>
    </VtmnList>
  </div>
</Story>

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Without subtext" let:args>
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
