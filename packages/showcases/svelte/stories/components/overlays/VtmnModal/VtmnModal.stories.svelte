<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnModal, VtmnButton } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/showcase-core/csf/components/overlays/modal.csf';
  let show = false;
</script>

<Meta
  title="Components / Overlays / VtmnModal"
  component={VtmnModal}
  {argTypes}
  {parameters}
/>

<Story name="Overview" let:args>
  <VtmnButton
    on:click={() => {
      show = true;
    }}>Display modal</VtmnButton
  >
  <VtmnModal
    title={args.title}
    animationDisabled={args.animationDisabled}
    aria-labelledby="vtmn-modal-title"
    aria-describedby="vtmn-modal-description"
    {show}
    on:cancel={() => {
      show = false;
    }}
  >
    <slot slot="title">This is the title</slot>
    <slot slot="description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
      assumenda? Asperiores rem nulla odit saepe dolores molestias
      exercitationem accusamus perferendis est aut repudiandae optio vel dicta
      reprehenderit ad, repellendus officiis cumque omnis labore in quia? Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Numquam, assumenda?
      Asperiores rem nulla odit saepe dolores molestias exercitationem accusamus
      perferendis est aut repudiandae optio vel dicta reprehenderit ad,
      repellendus officiis cumque omnis labore in quia? Lorem ipsum dolor, sit
      amet consectetur adipisicing elit. Numquam, assumenda? Asperiores rem
      nulla odit saepe dolores molestias exercitationem accusamus perferendis
      est aut repudiandae optio vel dicta reprehenderit ad, repellendus officiis
      cumque omnis labore in quia? Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Numquam, assumenda? Asperiores rem nulla odit saepe
      dolores molestias exercitationem accusamus perferendis est aut repudiandae
      optio vel dicta reprehenderit ad, repellendus officiis cumque omnis labore
      in quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
      exercitationem accusamus perferendis est aut repudiandae optio vel dicta
      reprehenderit ad, repellendus officiis cumque omnis labore in quia? Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Numquam, assumenda?
      Asperiores rem nulla odit saepe dolores molestias exercitationem accusamus
      perferendis est aut repudiandae optio vel dicta reprehenderit ad,
      repellendus officiis cumque omnis labore in quia? Lorem ipsum dolor, sit
      amet consectetur adipisicing elit. Numquam, assumenda? Asperiores rem
      nulla odit saepe dolores molestias exercitationem accusamus perferendis
      est aut repudiandae optio vel dicta reprehenderit ad, repellendus officiis
      cumque omnis labore in quia? Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Numquam, assumenda? Asperiores rem nulla odit saepe
      dolores molestias exercitationem accusamus perferendis est aut repudiandae
      optio vel dicta reprehenderit ad, repellendus officiis cumque omnis labore
      in quia?
    </slot>
    <slot slot="actions">
      <VtmnButton
        variant="secondary"
        on:click={() => {
          console.log('Go back');
          show = false;
        }}>Go Back</VtmnButton
      >
      <VtmnButton
        variant="primary"
        on:click={() => {
          console.log('Yes, I understand'), (show = false);
        }}>Yes, I understand</VtmnButton
      >
    </slot>
  </VtmnModal>
</Story>

<Story name="Without actions" let:args>
  <VtmnButton
    on:click={() => {
      show = true;
    }}>Display modal</VtmnButton
  >
  <VtmnModal
    title={args.title}
    aria-labelledby="vtmn-modal-title"
    aria-describedby="vtmn-modal-description"
    animationDisabled={args.animationDisabled}
    {show}
    on:cancel={() => {
      show = false;
    }}
  >
    <slot slot="title">This is the title</slot>
    <slot slot="description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
      assumenda? Asperiores rem nulla odit saepe dolores molestias
      exercitationem accusamus perferendis est aut repudiandae optio vel dicta
      reprehenderit ad, repellendus officiis cumque omnis labore in quia? Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Numquam, assumenda?
      Asperiores rem nulla odit saepe dolores molestias exercitationem accusamus
      perferendis est aut repudiandae optio vel dicta reprehenderit ad,
      repellendus officiis cumque omnis labore in quia? Lorem ipsum dolor, sit
      amet consectetur adipisicing elit. Numquam, assumenda? Asperiores rem
      nulla odit saepe dolores molestias exercitationem accusamus perferendis
      est aut repudiandae optio vel dicta reprehenderit ad, repellendus officiis
      cumque omnis labore in quia? Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Numquam, assumenda? Asperiores rem nulla odit saepe
      dolores molestias exercitationem accusamus perferendis est aut repudiandae
      optio vel dicta reprehenderit ad, repellendus officiis cumque omnis labore
      in quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Numquam, assumenda? Asperiores rem nulla odit saepe dolores molestias
      exercitationem accusamus perferendis est aut repudiandae optio vel dicta
      reprehenderit ad, repellendus officiis cumque omnis labore in quia? Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Numquam, assumenda?
      Asperiores rem nulla odit saepe dolores molestias exercitationem accusamus
      perferendis est aut repudiandae optio vel dicta reprehenderit ad,
      repellendus officiis cumque omnis labore in quia? Lorem ipsum dolor, sit
      amet consectetur adipisicing elit. Numquam, assumenda? Asperiores rem
      nulla odit saepe dolores molestias exercitationem accusamus perferendis
      est aut repudiandae optio vel dicta reprehenderit ad, repellendus officiis
      cumque omnis labore in quia? Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Numquam, assumenda? Asperiores rem nulla odit saepe
      dolores molestias exercitationem accusamus perferendis est aut repudiandae
      optio vel dicta reprehenderit ad, repellendus officiis cumque omnis labore
      in quia?
    </slot>
  </VtmnModal>
</Story>
