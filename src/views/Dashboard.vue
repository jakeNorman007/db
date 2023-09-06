<template>
    <main class="flex justify-between">
        <p class="text-white text-4xl font-bold">Your Boards</p>
        <UserAvatar />
    </main>
</template>

<script>
    import UserAvatar from "../components/UserAvatar.vue";

    export default {
       name: "Dashboard",
       components: {
           UserAvatar,
        }
    }
</script>
