# Quick start

You need to add `@vtmn/svelte` on your `package.json`

```
npm install @vtmn/svelte
```

Now, you can use `VtmnToast` on your app.

# How it works

First, you need to place the `VtmnToast` component preferably at your

`app.svelte`

```svelte
<script>
  import { VtmnToast } from '@vtmn/svelte';
</script>

<VtmnToast />
```

Once the initialization is done, it is now possible to pass toasts to the component with the `send` method anywhere in the application.

`component.svelte`

```svelte
<script>
  import { vtmnToastStore, VtmnButton } from '@vtmn/svelte';

  const handleClick = () => {
    vtmnToastStore.send({
      content: 'Hello world',
      withCloseButton: true,
      withIcon: true,
    });
  };
</script>

<VtmnButton on:click={handleClick}>Send toast</VtmnButton>
```
