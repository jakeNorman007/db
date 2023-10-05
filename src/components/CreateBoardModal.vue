<script setup>
import { Teleport, ref } from "vue";
import { useCreateDemoBoard } from "../views/DashboardViews/useCreateDemoBoard";

const { isCreating, createDemoBoard } = useCreateDemoBoard();
const modalOpen = ref(false);
const boardName = ref("");
</script>

<template>
  <button @click="modalOpen = true">+ New board</button>
  <Teleport to="body">
    <div v-if="modalOpen" class="bg-green-200 rounded-md  fixed z-[999] w-[30rem] h-[35rem] ml-[-150px] left-[45%] top-[15%]">
      <p>Hello from the modal!</p>
      <form @submit="createDemoBoard(boardName)">
          <input type="text" v-model="boardName" />
          <button type="submit" :disabled="isCreating">Add</button>
      </form>
      <button @click="modalOpen = false">Close</button>
    </div>
  </Teleport>
</template>
