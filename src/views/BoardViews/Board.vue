<script setup>
import ListHeaderIcon from "../../icons/ListHeaderIcon.vue";
import CreateListModal from "../../components/CreateListModal.vue";
import BoardDescriptionModal from "../../components/BoardDescriptionModal.vue";
import { useBoard } from "./useGetBoard";
import { useLists } from "./useLists";

const { lists } = useLists();
const { isLoading, board } = useBoard();
</script>

<template>
  <div class="py-8 ml-[5rem] text-3xl font-semibold">
    {{ board?.boardName }} ({{ lists?.length }})
    <CreateListModal /><BoardDescriptionModal />
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="grid grid-cols-2 gap-y-6">
    <div v-if="lists?.length === 0">
      Looks empty here, let's create some tasks!
    </div>
    <div
      v-else
      v-for="(list, index) in lists"
      :key="index"
      class="bg-slate-50 rounded-md shadow-md h-[20rem] mx-6 shadow-slate-300 border-t-2 border-slate-200"
    >
      <div><ListHeaderIcon /></div>
      <button @click="$router.replace(`/lists/${list.id}`)">
        {{ list.listName }}
        -> people on team, timestamps, edit, descriptions( short & long), due date, team name, delete
      </button>
    </div>
  </div>
</template>
