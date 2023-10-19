<script setup>
import { Teleport, ref } from "vue";
import { useCreateDemoBoard } from "../views/DashboardViews/useCreateDemoBoard";
import AddBoardIcon from "../icons/AddBaordIcon.vue";

const { isCreating, createDemoBoard } = useCreateDemoBoard();
const modalOpen = ref(false);
const boardName = ref("");
const description = ref("");

</script>

<template>
  <button
    @click="modalOpen = true"
    class="font-semibold bg-green-200 px-4 py-3 rounded-full hover:bg-green-300"
  >
  <div class="flex gap-2">
  <AddBoardIcon />Start new project 
  </div>
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
        class="flex flex-col bg-slate-50 rounded-md fixed z-[999] w-[30rem] h-[33rem] ml-[-150px] left-[45%] top-[15%]"
      >
        <p class="px-6 py-3 font-semibold text-xl">Create new board</p>
        <form @submit="createDemoBoard({boardName, description})">
          <div class="my-3">
            <label class="text-sm text-slate-500 font-semibold px-6"
              >Board name</label
            >
            <input
              type="text"
              required
              maxlength="20"
              v-model="boardName"
              placeholder="e.g. project name..."
              class="flex px-4 rounded-md ml-6 py-2 w-[27rem] border border-slate-300 hover:border-green-300"
            />
            <label class="text-sm text-slate-500 font-semibold px-6"
              >Description</label
            >
            <textarea
              type="text"
              required
              maxlength="250"
              v-model="description"
              placeholder="e.g. project description..."
              class="flex resize-none px-4 rounded-md ml-6 py-2 w-[27rem] h-[15rem] border border-slate-300 hover:border-green-300"
            />
          </div>
          <button
            type="submit"
            :disabled="isCreating"
            class="bg-green-200 hover:bg-green-300 ml-6 w-[27rem] rounded-full mt-2 py-2"
          >
           Create board 
          </button>
        <button @click="modalOpen = false"
            class="bg-green-200 hover:bg-green-300 ml-6 w-[27rem] rounded-full mt-2 py-2"
            >Close</button>
        </form>
      </div>
    </Teleport>
  </div>
</template>
