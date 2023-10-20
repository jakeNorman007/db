<script setup>
import { useBoards } from "./BoardQueries/useBoards";
import { useDeleteBoard } from "./BoardQueries/useDeleteBoard";
import CreateBoardModal from "../components/CreateBoardModal.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import { format } from "date-fns";

const { isDeleting, deleteBoard } = useDeleteBoard();
const { isLoading, boards } = useBoards();
</script>

<template>
  <div class="pt-8 px-[8rem]">
    <div class="flex gap-4 justify-between items-center">
      <p class="text-3xl font-semibold">
       Your projects ({{ boards?.length }})
      </p>
      <CreateBoardModal />
    </div>
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="grid grid-cols-3 mt-10 mx-[8rem] gap-4">
    <div
      v-for="(board, index) in boards"
      :key="index"
      class="grid bg-slate-50 h-[12rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
    >
      <div class="flex flex-col">
        <button
          @click="$router.replace(`/board/${board.id}`)"
          class="flex flex-col p-4 text-black text-xl font-semibold"
        >
          Project name: {{ board.boardName }}
        </button>
        <div class="flex mx-3">
          <button @click="deleteBoard(board.id)" :disabled="isDeleting">
            <DeleteIcon />
          </button>
          {{ format(new Date(board.created_at), "MMM dd, yyyy") }}
        </div>
      </div>
    </div>
  </div>
</template>
