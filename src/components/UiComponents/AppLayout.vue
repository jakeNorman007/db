<template>
  <div class="grid grid-cols-[8rem_1fr]">
    <Navbar />
    <main class="bg-slate-50 pt-9 px-[4.8rem]">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
