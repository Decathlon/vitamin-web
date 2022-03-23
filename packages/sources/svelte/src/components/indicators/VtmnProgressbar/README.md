# Quick start

You need to add `@vtmn/svelte` on your `package.json`.

```
npm install @vtmn/svelte
```

Now, you can use `VtmnProgressbar` on your app.

# How it works

First, you need to place the `VtmnAlert` component on the top of your application

`app.svelte`

```javascript
<script>
  import { VtmnProgressbar } from '@vtmn/svelte';
</script>

<VtmnProgressbar>
```

# Available parameters

## Linear variant

| Props         | description                                            | Type    | Required | Available values               | default value |
| ------------- | ------------------------------------------------------ | ------- | -------- | ------------------------------ | ------------- |
| label         | Label displayed above the progress bar                 | string  | true     |                                |               |
| size          | Size of the progress bar                               | string  |          | 'small' \| 'medium' \| 'large' | medium        |
| progress      | Progress value of the bar                              | number  | true     | 0 to 100                       | 0             |
| indeterminate | Define if the progress is indeterminate or determinate | boolean |          | true \| false                  |               |

## Circular variant

| Props         | Description                                            | Type    | Required            | Available values | default value |        |     |     |     |
| ------------- | ------------------------------------------------------ | ------- | ------------------- | ---------------- | ------------- | ------ | --- | --- | --- | --- |
| progress      | Progress value of the bar                              | number  | true                |                  | 0             |        |     |     |     |
| label         | Display progress indicator                             | boolean |                     |                  | false         |        |     |     |     |
| track         | Display a tracking circle                              | boolean |                     |                  | false         |        |     |     |     |
| indeterminate | Define if the progress is indeterminate or determinate | boolean |                     |                  | false         |        |     |     |     |
| size          | Size of the progressbar                                | string  |                     | 'small'          | 'medium'      | medium |     |     |     |     |
| img           | Image src display on the center of the progressbar     | string  |                     |                  |               |        |     |     |     |
| imgAlt        | Image Alt applied on the img                           | string  | true if img are set |                  |               |        |     |     |     |
