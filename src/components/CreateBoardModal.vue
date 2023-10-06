<script setup>
import { Teleport, ref } from "vue";
import { useCreateDemoBoard } from "../views/DashboardViews/useCreateDemoBoard";

const { isCreating, createDemoBoard } = useCreateDemoBoard();
const modalOpen = ref(false);
const boardName = ref("");
</script>

<template>
  <button
    @click="modalOpen = true"
    class="bg-green-200 px-3 py-3 rounded-md hover:bg-green-300"
  >
    + New board
  </button>
  <div
    v-if="modalOpen"
    @click="modalOpen = false"
    class="h-screen fixed bg-black z-[998] w-full left-0 top-0 opacity-25"
  >
    <Teleport to="body">
      <div
        v-if="modalOpen"
        @click.stop=""
        class="flex flex-col bg-slate-50 rounded-md fixed z-[999] w-[30rem] h-[20rem] ml-[-150px] left-[45%] top-[15%]"
      >
        <p class="px-6 py-[1rem] font-semibold text-xl">Create new board</p>
        <form @submit="createDemoBoard(boardName)">
          <div class="my-3">
            <label class="text-sm text-slate-500 font-semibold px-6"
              >Board name</label
            >
            <input
              type="text"
              v-model="boardName"
              placeholder="e.g. project name..."
              class="flex px-3 rounded-md ml-6 py-2 w-[27rem] border border-slate-300 hover:border-green-300"
            />
          </div>
          <div class="mb-3">
            <label class="text-sm text-slate-500 font-semibold px-6"
              >Description</label
            >
            <input
              type="text"
              placeholder="e.g. creating backend for app..."
              class="flex px-3 rounded-md ml-6 py-2 w-[27rem] border border-slate-300 hover:border-green-300"
            />
          </div>
          <button
            type="submit"
            :disabled="isCreating"
            class="bg-green-200 hover:bg-green-300 ml-6 w-[27rem] rounded-md mt-2 py-2"
          >
           Create board 
          </button>
        </form>
      </div>
    </Teleport>
  </div>
</template>
