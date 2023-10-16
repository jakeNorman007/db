<script setup>
import ListHeaderIcon from "../../icons/ListHeaderIcon.vue";
import CreateListModal from "../../components/CreateListModal.vue";
import BoardDescriptionModal from "../../components/BoardDescriptionModal.vue";
import { useBoard } from "./useGetBoard";
import { useLists } from "./useLists";
import { useCards } from "./useCards";

const { cards } = useCards();
const { lists } = useLists();
const { isLoading, board } = useBoard();
</script>

<template>
  <div class="flex">
    <div class="absolute pt-8 ml-[5rem] text-3xl font-semibold">
      {{ board?.boardName }} ({{ lists?.length }})
      <CreateListModal /><BoardDescriptionModal />
    </div>
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="flex mt-6">
    <div
      v-if="lists?.length === 0"
      class="flex flex-col gap-2 my-[5rem] ml-[4rem] font-semibold text-lg w-[22rem] h-[50rem]"
    >
      Looks empty here, let's create some lists!
    </div>
    <div
      v-else
      v-for="(list, index) in lists"
      :key="index"
      class="flex flex-col gap-2 my-[5rem] ml-[4rem] font-semibold text-lg w-[22rem] h-[50rem]"
    >
      <div class="flex items-center gap-2 pl-5 pb-5">
        <div><ListHeaderIcon /></div>
        <div>{{ list.listName }} ({{ cards?.length }})</div>
      </div>
      <div class="overflow-y-scroll scrollbar-hide">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="p-3 m-3 bg-slate-50 h-[6rem] w-[20rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
        >
          {{ card.cardName }}
         - list id = {{ card.list_id }}
        </div>
      </div>
    </div>
  </div>
</template>
