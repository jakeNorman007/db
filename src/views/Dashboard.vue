<template>
    <main class="mb-9">
        <div class="flex justify-between mb-7">
        <p class="text-white text-4xl font-bold">Your Boards</p>
        <UserAvatar />
        </div>
        <div class="flex">
            <AddBoard />
        </div>
    </main>
</template>

<script>
    import UserAvatar from "../components/UserAvatar.vue";
    import AddBoard from "../components/AddBoard.vue";

    export default {
       name: "Dashboard",
       components: {
           UserAvatar,
           AddBoard
        }
    }
</script>
