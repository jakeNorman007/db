<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
    <router-view />
    </component>
  </main>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "App",
};
</script>
