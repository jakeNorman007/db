<script setup>
import { useDemoBoards } from "./useDemoBoards";
import { useDeleteBoard } from "./useDeleteBoard";
import CreateBoardModal from "../../components/CreateBoardModal.vue";

const { isDeleting, deleteBoard } = useDeleteBoard();
const { isLoading, demoBoards } = useDemoBoards();
</script>

<template>
  <div class="pt-8 px-[8rem]">
    <div class="flex gap-4 justify-between items-center">
      <p class="text-3xl font-semibold">Your Boards (#)</p>
      <CreateBoardModal />
    </div>
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="grid grid-cols-5 mt-10 mx-[8rem] gap-4">
    <div
      v-for="(demoBoard, index) in demoBoards"
      :key="index"
      class="grid bg-slate-50 h-[6rem] rounded-md shadow-md shadow-slate-300"
    >
      <div class="flex flex-col">
        <button
          @click="$router.replace(`/board/${demoBoard.id}`)"
          class="flex p-4 text-black text-xl font-semibold"
        >
          {{ demoBoard.boardName }}
        </button>
        <div class="flex justify-end mx-3">
          <button
            @click="deleteBoard(demoBoard.id)"
            :disabled="isDeleting"
            class="w-[1.5rem] rounded-full bg-green-200 hover:bg-green-300"
          >
            D
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
