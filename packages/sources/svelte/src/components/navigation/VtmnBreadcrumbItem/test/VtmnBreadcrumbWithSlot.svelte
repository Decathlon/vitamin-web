<script>
  import VtmnBreadcrumbItem from '../VtmnBreadcrumbItem.svelte';
  import { VtmnIcon } from '../../../guidelines';
</script>

<VtmnBreadcrumbItem {...$$restProps}>
  <VtmnIcon value="vtmx-home-line" />
  <a slot="link" href="Home">Test</a>
</VtmnBreadcrumbItem>
<VtmnBreadcrumbItem>
  <VtmnIcon value="vtmx-store-line" />
  <a slot="link" href="Page 2">Test</a>
</VtmnBreadcrumbItem>
<VtmnBreadcrumbItem aria-label="Curent page title" />
