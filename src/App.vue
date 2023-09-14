<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { QueryClient } from "@tanstack/vue-query";

// sets up the cache behind the scenes
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
</script>
