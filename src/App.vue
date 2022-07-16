<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Loading from "./components/Loading.vue";
</script>

<template>
<Loading/>
  <Navbar />
  <router-view></router-view>
</template>

<style></style>
