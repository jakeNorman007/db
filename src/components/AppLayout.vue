<script setup>
import MainNav from "./MainNav.vue";
</script>

<template>
  <div
    class="grid grid-cols-[16rem_1fr] h-screen overflow-y-hidden scrollbar-hide"
  >
    <MainNav />
    <main class="bg-green-50">
      <router-view />
    </main>
  </div>
</template>
