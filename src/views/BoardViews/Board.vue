<script setup>
import { useBoard } from "./useBoard";
import { useEditBoard } from "./useEditBoard";

const { editBoard, isEdititng } = useEditBoard();
const { board, isLoading } = useBoard();
</script>

<template>
  <div v-if="isLoading" class="text-4xl text-slate-900 font-bold animate-pulse">
    Loading...
  </div>
  <div v-else>
  <div>{{board.boardName}}</div>
  </div>
</template>
