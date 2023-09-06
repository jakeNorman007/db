<template>
  <div class="grid grid-cols-[7rem_1fr]">
    <Navbar />
    <main class="bg-green-400 pt-9 px-[4.8rem]">
            <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "AppLayout",
  components: {
    Navbar,
  },
};
</script>
