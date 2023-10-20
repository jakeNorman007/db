<script setup>
import { useCards } from "./CardQueries/useCards";
import { useGetList } from "../views/ListQueries/useGetList";
import draggable from "vuedraggable";

const { list } = useGetList();
const { cards } = useCards();
</script>

<template>
  <div class="grid grid-cols-2 gap-[1rem]">
    <div
      class="flex flex-col ml-[1rem] font-semibold text-lg w-[50rem] h-[57rem]"
    >
    <div class="text-3xl p-4">{{ list?.listName }} ({{ cards?.length }})</div>
      <draggable
        :list="cards"
        tag="div"
        item-key="cardName"
        @start="drag=true"
        @end="drag=false"
        class="overflow-y-scroll scrollbar-hide"
      >
        <template #item="{ element: card }">
          <div
            class="p-3 m-3 bg-slate-50 h-[12rem] w-[49rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
          >
            {{ card?.cardName }}
          </div>
        </template>
      </draggable>
    </div>
    <div
      class="bg-slate-50 m-3 h-[56rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
    >
      Comments here
    </div>
  </div>
</template>
