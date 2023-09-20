<template>
  <div class="grid">
    <BoardNavbar />
    <main class="bg-slate-50 pt-9 px-[4.8rem] h-screen">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import BoardNavbar from "./BoardNavbar.vue";
</script>
