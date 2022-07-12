<script setup lang="ts">
import Users from "../components/Users.vue";
</script>

<template>
  <div class="grid lg:grid-cols-4 gap-4 m-10 md:grid-cols-2 sm:grid-cols-1">
    <Users />
  </div>
</template>
<style>
body {
  @apply bg-slate-200;
}
</style>
