<script setup>
import { useBoard } from "./useGetBoard";

const { isLoading, board } = useBoard();
</script>

<template>
    {{board?.boardName}}
  <div v-if="isLoading">Loading...</div>
  <div v-else>DATA GOES HERE</div>
</template>
