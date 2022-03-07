<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import { VtmnModal, VtmnButton } from '@vtmn/svelte';
  import { parameters } from '@vtmn/showcase-core/csf/components/overlays/modal.csf';
  const argTypes = {
    title: {
      type: { name: 'string', required: true },
      description: 'The printed title',
      defaultValue: 'Modal title',
      control: { type: 'text' },
    },
    visible: {
      type: { name: 'boolean', required: true },
      description: 'Display the modal',
      defaultValue: 'false',
      control: {
        visible: 'boolean',
      },
    },
  };
  let visible = false;
</script>

<Meta
  title="Components / Overlays / VtmnModal"
  component={VtmnModal}
  {argTypes}
  {parameters}
/>

<Story name="Overview">
  <VtmnButton
    on:click={() => {
      visible = true;
    }}>Display modal</VtmnButton
  >
  <VtmnModal
    title="Modal title"
    aria-labelledby="vtmn-modal-title"
    aria-describedby="vtmn-modal-description"
    {visible}
    on:cancel={() => {
      visible = false;
    }}
  >
    <p
      slot="description"
      id="vtmn-modal-description"
      class="vtmn-modal_content_body--text"
    >
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
    </p>
    <div slot="actions" class="vtmn-modal_content_actions">
      <VtmnButton variant="secondary">Go Back</VtmnButton>
      <VtmnButton variant="primary">Yes, I understand</VtmnButton>
    </div>
  </VtmnModal>
</Story>

<Story name="Without actions">
  <VtmnButton
    on:click={() => {
      visible = true;
    }}>Display modal</VtmnButton
  >
  <VtmnModal
    title="Modal title"
    aria-labelledby="vtmn-modal-title"
    aria-describedby="vtmn-modal-description"
    {visible}
    on:cancel={() => {
      visible = false;
    }}
  >
    <div
      slot="description"
      id="vtmn-modal-description"
      class="vtmn-modal_content_body--text"
    >
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
    </div>
  </VtmnModal>
</Story>
