# `@vtmn/svelte`

> Decathlon Design System - Vitamin Svelte library

## Consuming Components

You may want to use the source Svelte files to benefit from some features (Server side rendering for instance). To do so, you will need to import components exposed in the `src/` folder of the package.

Example with the `VtmnButton` :

```js
// App.svelte
<script>
  import VtmnButton from '@vtmn/svelte/src/components/VtmnButton.svelte';
</script>

<VtmnButton>Button</VtmnButton>
```
