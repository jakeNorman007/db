<template>
    <Navbar />
    <div class="bg-green-400 h-screen">
    <h1>Dashboard page</h1>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "dashboard",
  components: {
      Navbar,
  }
};
</script>
