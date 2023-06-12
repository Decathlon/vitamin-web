<script>
  import VtmnAccordion from '../VtmnAccordion.svelte';
</script>

<VtmnAccordion {...$$restProps}>
  <svelte:fragment slot="summaryComponent">Summary from slot</svelte:fragment>
  Unit test content
</VtmnAccordion>
