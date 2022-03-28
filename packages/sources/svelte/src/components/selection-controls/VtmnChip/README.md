# Quick start

You need to add `@vtmn/svelte` on your `package.json`

```
npm install @vtmn/svelte
```

Now, you can use `VtmnChip` on your svelte file with

```javascript
<script>import {VtmnChip} from '@vtmn/svelte';</script>
```

# How to use variants 
## Single-choice

| Props      | Description              | Type    | Required | Available values   | default value |
|------------|--------------------------|---------|----------|--------------------|---------------|
| selected   | If the chip is selected | boolean | true     |                    |               |
| disabled   | Disable the chip         | boolean |          |                    | false         |
| size       | Size of the chip         | string  |          | 'small' \| 'medium' | medium        |

## Input

| Props      | Description              | Type    | Required | Available values   | default value |
|------------|--------------------------|---------|----------|--------------------|---------------|
| selected   | If the chip is selected | boolean | true     |                    |               |
| disabled   | Disable the chip         | boolean |          |                    | false         |
| size       | Size of the chip         | string  |          | 'small' \| 'medium' | medium        |
| icon       | Name of the icon         | string  |          |                    |               |

## Filter

| Props      | Description              | Type    | Required | Available values   | default value |
|------------|--------------------------|---------|----------|--------------------|---------------|
| selected   | If the chip is selected | boolean | true     |                    |               |
| disabled   | Disable the chip         | boolean |          |                    | false         |
| size       | Size of the chip         | string  |          | 'small' \| 'medium' | medium        |
| badgeValue | Value of the badge       | number  |          |                    |               |

## Action

| Props      | Description              | Type    | Required | Available values   | default value |
|------------|--------------------------|---------|----------|--------------------|---------------|
| disabled   | Disable the chip         | boolean |          |                    | false         |
| size       | Size of the chip         | string  |          | 'small' \| 'medium' | medium        |
| icon       | Name of the icon         | string  |          |                    |               |