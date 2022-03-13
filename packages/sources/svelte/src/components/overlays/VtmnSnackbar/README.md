# Quick start

You need to add `@vtmn/svelte` on your `package.json`

```
npm install @vtmn/svelte
```

Now, you can use `VtmnSnackbar` on your app.

# How it works

First, you need to place the `VtmnSnackbar` component preferably at your

`app.svelte`

```svelte
<script>
  import { VtmnSnackbar } from '@vtmn/svelte';
</script>

<VtmnSnackbar />
```

Once the initialization is done, it is now possible to pass snackbar to the component with the `send` method anywhere in the application.

`component.svelte`

```svelte
<script>
  import { vtmnSnackbarStore, VtmnButton } from '@vtmn/svelte';
  const handleClick = () => {
    vtmnSnackbarStore.send({
      content: 'Hello world',
      withCloseButton: true,
      action: {
        label: 'Action',
        execute: () => {
          console.log('Hello world for the action');
        },
      },
    });
  };
</script>

<VtmnButton on:click={handleClick}>Send toast</VtmnButton>
```
