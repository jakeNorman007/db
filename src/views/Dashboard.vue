<script setup>
import { useBoards } from "./BoardQueries/useBoards";
import { useDeleteBoard } from "./BoardQueries/useDeleteBoard";
import CreateBoardModal from "../components/CreateBoardModal.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
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
          class="flex m-4 px-5 py-2 font-semibold bg-green-200 rounded-full hover:bg-green-300"
        >
          Project name: {{ board.boardName }}
        </button>
            <div class="px-6 text-md text-slate-400">
          {{ board.shortDescription }}
            </div>
        <div class="flex mx-3 mt-[3rem] px-2 justify-between">
            <div>Project created: {{ format(new Date(board.created_at), "MMM dd, yyyy") }}</div>
            <div>
          <button><EditIcon /></button>
          <button @click="deleteBoard(board.id)" :disabled="isDeleting">
            <DeleteIcon />
          </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
