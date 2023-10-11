<script setup>
import { useBoard } from "./useGetBoard";
import { useLists } from "./useLists";

const { lists } = useLists();
const { isLoading, board } = useBoard();
</script>

<template>
  {{ board?.boardName }}
  <div v-if="isLoading">Loading...</div>
  <div v-else
    class="flex gap-[3rem]"
      >
    <div
      v-for="(list, index) in lists"
      :key="index"
      class="bg-slate-50 h-[6rem] w-[25rem] rounded-md shadow-md shadow-slate-300"
    >
      {{ list.listName }}
    </div>
  </div>
</template>
