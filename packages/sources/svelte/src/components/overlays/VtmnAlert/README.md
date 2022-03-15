# Quick start

You need to add `@vtmn/svelte` and `@vtmn/icon` on your `package.json`.
For `@vtmn/icon` please refer to its Readme.

```
npm install @vtmn/svelte
```

Now, you can use `VtmnAlert` on your app.

# How it works

First, you need to place the `VtmnAlert` component on the top of your application

`app.svelte`

```svelte
<script>
  import { VtmnAlert } from '@vtmn/svelte';
</script>

<VtmnAlert />
```

Once the initialization is done, it is now possible to pass toasts to the component with the `send` method anywhere in the application.

`component.svelte`

```svelte
<script>
  import { vtmnAlertStore, VtmnButton } from '@vtmn/svelte';
  const handleClick = () => {
    vtmnAlertStore.send({
      'aria-labelledby': 'Storybook',
      'aria-describedby': args.variant,
      description:
        'Alert are used to draw the users attention to an important information',
      title: 'This is the title of the alert',
      variant: 'info',
      withCloseButton: true,
    });
  };
</script>

<VtmnButton on:click={handleClick}>Send toast</VtmnButton>
```
