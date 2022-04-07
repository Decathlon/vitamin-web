<script>
  import VtmnBreadcrumb from '../VtmnBreadcrumb.svelte';
  import VtmnBreadcrumbItem from '../../VtmnBreadcrumbItem/VtmnBreadcrumbItem.svelte';
</script>

<VtmnBreadcrumb {...$$restProps}>
  <VtmnBreadcrumbItem>Item 1</VtmnBreadcrumbItem>
  <VtmnBreadcrumbItem>Item 2</VtmnBreadcrumbItem>
  <VtmnBreadcrumbItem>Item 3</VtmnBreadcrumbItem>
</VtmnBreadcrumb>
