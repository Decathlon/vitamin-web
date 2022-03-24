<script>
  import VtmnSelect from '../VtmnSelect.svelte';
  export let value;
</script>

<VtmnSelect {...$$restProps} on:change bind:value>
  <option value="" disabled selected>Select</option>
  <option value="gymnastics">Gymnastics</option>
  <option value="archery">Archery</option>
  <option value="climbing">Climbing</option>
  <option value="surf">Surf</option>
  <option value="badminton">Badminton</option>
  <option value="football">Football</option>
</VtmnSelect>
