<script setup>
import { useBoard } from "./useGetBoard";
//import { useEditBoard } from "./useEditBoard";

// coming back to do the edit later, need to move on
//const { isEditing, editBoard } = useEditBoard();
const { isLoading, board } = useBoard();
</script>

<template>
  {{ board?.boardName }}
  <div v-if="isLoading">Loading...</div>
  <div v-else>DATA GOES HERE</div>
</template>
