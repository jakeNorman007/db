<script setup>
import { useDemoBoards } from "./useDemoBoards";
import { useDeleteBoard } from "./useDeleteBoard";
import CreateBoardModal from "../../components/CreateBoardModal.vue";
import DeleteIcon from "../../icons/DeleteIcon.vue";

const { isDeleting, deleteBoard } = useDeleteBoard();
const { isLoading, demoBoards } = useDemoBoards();
</script>

<template>
  <div class="pt-8 px-[8rem]">
    <div class="flex gap-4 justify-between items-center">
      <p class="text-3xl font-semibold">
        Your Boards ({{ demoBoards?.length }})
      </p>
      <CreateBoardModal />
    </div>
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="grid grid-cols-5 mt-10 mx-[8rem] gap-4">
    <div
      v-for="(demoBoard, index) in demoBoards"
      :key="index"
      class="grid bg-slate-50 h-[6rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
    >
      <div class="flex flex-col">
        <button
          @click="$router.replace(`/board/${demoBoard.id}`)"
          class="flex flex-col p-4 text-black text-xl font-semibold"
        >
          {{ demoBoard.boardName }}
        </button>
        <div class="flex justify-end mx-3">
          <button @click="deleteBoard(demoBoard.id)" :disabled="isDeleting">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
