<script setup>
import { ref } from "vue";
import { useBoards } from "./useBoards";
import { useDeleteBoard } from "./useDeleteBoard";

const { boards, isLoading } = useBoards();
const { isDeleting, deleteBoard } = useDeleteBoard();

</script>

<template>
  <p class="text-3xl text-white font-semibold mb-9">Your Boards</p>
  <div v-if="isLoading" class="text-4xl text-slate-900 font-bold animate-pulse">
    Loading...
  </div>
  <div class="grid grid-cols-5 gap-5">
    <div v-for="(board, index) in boards" :key="index" class="bg-slate-300 h-[10rem] rounded-md
            text-2xl text-slate-900 font-semibold p-[2rem] cursor-pointer">{{ board.name }}
        <button @click="deleteBoard(board.id)" :disabled="isDeleting">Delete</button>
    </div>
  </div>
</template>
