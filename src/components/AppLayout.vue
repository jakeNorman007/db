<script setup>
import MainNav from "./MainNav.vue";
</script>

<template>
  <div class="grid grid-cols-[5rem_1fr]">
    <MainNav />
    <main class="bg-zinc-100">
      <router-view />
    </main>
  </div>
</template>
