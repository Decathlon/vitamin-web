<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { VtmnModal, VtmnButton } from '@vtmn/svelte';
  import {
    parameters,
    argTypes,
  } from '@vtmn/opencase-core/csf/components/overlays/modal.csf';
  let open = false;
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
      open = true;
    }}>Display modal</VtmnButton
  >
  <VtmnModal
    title={args.title}
    animationDisabled={args.animationDisabled}
    aria-labelledby="vtmn-modal-title"
    aria-describedby="vtmn-modal-description"
    {open}
    on:close={() => {
      open = false;
    }}
  >
    <svelte:fragment slot="title">This is the title</svelte:fragment>
    <svelte:fragment slot="description">
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
    </svelte:fragment>
    <svelte:fragment slot="actions">
      <VtmnButton
        variant="secondary"
        on:click={() => {
          console.log('Go back');
          open = false;
        }}>Go Back</VtmnButton
      >
      <VtmnButton
        variant="primary"
        on:click={() => {
          console.log('Yes, I understand'), (open = false);
        }}>Yes, I understand</VtmnButton
      >
    </svelte:fragment>
  </VtmnModal>
</Story>

<Story name="Without actions" let:args>
  <VtmnButton
    on:click={() => {
      open = true;
    }}>Display modal</VtmnButton
  >
  <VtmnModal
    title={args.title}
    aria-labelledby="vtmn-modal-title"
    aria-describedby="vtmn-modal-description"
    animationDisabled={args.animationDisabled}
    {open}
    on:close={() => {
      open = false;
    }}
  >
    <svelte:fragment slot="title">This is the title</svelte:fragment>
    <svelte:fragment slot="description">
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
    </svelte:fragment>
  </VtmnModal>
</Story>
