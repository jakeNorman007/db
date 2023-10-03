<script setup>
import { ref } from "vue";
import { useDemoBoards } from "../DashboardViews/useDemoBoards";
import { useCreateDemoBoard } from "../DashboardViews/useCreateDemoBoard";

const { isCreating, createDemoBoard } = useCreateDemoBoard();
const { isLoading, demoBoards } = useDemoBoards();
const boardName = ref("");
</script>

<template>
  <div class="m-9">
    <div class="flex gap-4 justify-between items-center">
      <p class="text-3xl font-semibold">Your Boards</p>
      <div class="flex items-center gap-4">
          <p>Create a board</p>
      <form
        @submit="createDemoBoard(boardName)"
        class="flex gap-3 bg-zinc-200 px-10 py-2 rounded-md"
      >
        <input
          type="text"
          v-model="boardName"
          required
          :maxlength="20"
          class="w-[14rem] h-[2rem] rounded-md"
        />
        <button
          type="submit"
          @submit="toggleCreateBoard"
          :disabled="isCreating"
        >
        +
        </button>
      </form>
      </div>
    </div>
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="grid grid-cols-5 m-6">
    <div
      v-for="(demoBoard, index) in demoBoards"
      @click="$router.replace(`/board/${demoBoard.id}`)"
      :key="index"
      class="bg-zinc-300 h-[12rem] m-4 rounded-md"
    >
      <p class="text-slate-900 px-3 py-5 text-xl font-semibold">
        {{ demoBoard.boardName }}
      </p>
    </div>
  </div>
</template>
