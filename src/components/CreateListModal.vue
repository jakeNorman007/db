<script setup>
import { Teleport, ref } from "vue";
import { useCreateList } from "../views/ListQueries/useCreateList";
import AddBoardIcon from "../icons/AddBaordIcon.vue";
import { useRoute } from "vue-router";

const { isCreating, createList } = useCreateList();
const modalOpen = ref(false);
const listName = ref("");
const route = useRoute();
const board_id = route.params.boardId;

//making sure the current Id of the board is right, so I can throw it in list foreign Id
console.log(board_id);
</script>

<template>
  <button
    @click="modalOpen = true"
    class="font-semibold ml-[3rem] text-lg bg-green-200 px-4 py-3 rounded-full hover:bg-green-300"
  >
  <div class="flex gap-2">
  <AddBoardIcon />New list
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
        class="flex flex-col bg-slate-50 rounded-md fixed z-[999] w-[30rem] h-[15rem] ml-[-150px] left-[45%] top-[15%]"
      >
        <p class="px-6 py-[1rem] font-semibold text-xl">Create new list</p>
        <form @submit="createList({listName, board_id: board_id})">
          <div class="my-3">
            <label class="text-sm text-slate-500 font-semibold px-6"
              >List name</label
            >
            <input
              type="text"
              required
              maxlength="20"
              v-model="listName"
              placeholder="e.g. list name..."
              class="flex px-3 rounded-md ml-6 py-2 w-[27rem] border border-slate-300 hover:border-green-300"
            />
          </div>
          <button
            type="submit"
            :disabled="isCreating"
            @click="onClick"
            class="bg-green-200 hover:bg-green-300 ml-6 w-[27rem] rounded-full mt-2 py-2"
          >
           Create List
          </button>
        </form>
      </div>
    </Teleport>
  </div>
</template>
