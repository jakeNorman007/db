<script setup>
import { ref } from "vue";
import { useBoards } from "./useBoards";
import { useDeleteBoard } from "./useDeleteBoard";
import supabase from "../../services/supabase.js";

const { boards, isLoading } = useBoards();
const { isDeleting, deleteBoard } = useDeleteBoard();
const isShowing = ref(true);
const boardName = ref("");

function toggleCreateBoard() {
  isShowing.value = !isShowing.value;

  return { isShowing, toggleCreateBoard };
}

const createBoard = async () => {
  const { error } = await supabase
    .from("boards")
    .insert([{ boardName: boardName.value }]);
  if (error) {
    console.log(error);
    throw new Error("Board could not be created");
  }

  return { boardName };
};
</script>

<template>
  <div class="flex justify-between mb-12 text-slate-900">
    <p class="text-3xl font-semibold">Your Boards</p>
    <button
      v-if="isShowing"
      @click="toggleCreateBoard"
      class="text-white bg-slate-600 rounded-md px-[9rem] py-3 shadow-inner shadow-slate-400 hover:bg-slate-700 hover:text-green-500"
    >
      + Create Board
    </button>
    <div v-else>
      <form
        @submit="createBoard"
        class="flex gap-2 bg-slate-600 px-[2.1rem] py-3 rounded-md shadow-inner shadow-slate-400"
      >
        <input
          type="text"
          id="name"
          v-model="boardName"
          :maxlength="20"
          class="text-slate-900 pl-2 rounded-md"
        />
        <button
          type="submit"
          class="bg-green-400 rounded-md px-2 hover:bg-green-500"
        >
          Create
        </button>
        <button
          type="button"
          @click="toggleCreateBoard"
          class="bg-slate-300 rounded-md px-2"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
  <div v-if="isLoading" class="text-4xl text-slate-900 font-bold animate-pulse">
    Loading...
  </div>
  <div class="grid grid-cols-5 gap-5">
    <div
      @click="$router.replace(`/board/${board.id}`)"
      v-for="(board, index) in boards"
      :key="index"
      class="flex justify-between bg-slate-200 hover:bg-slate-300 h-[10rem] rounded-md text-2xl text-slate-900 font-semibold p-[2rem] cursor-pointer"
    >
      {{ board.boardName }}
      <button @click="deleteBoard(board.id)" :disabled="isDeleting" class="text-lg">
        Delete
      </button>
    </div>
  </div>
</template>
