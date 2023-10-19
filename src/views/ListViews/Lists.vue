<script setup>
import { useCards } from "../BoardViews/useCards";

const { cards } = useCards();
</script>

<template>
  <div class="grid grid-cols-2 gap-[5rem]">
    <div
      class="flex flex-col gap-2 ml-[4rem] font-semibold text-lg w-[50rem] h-[50rem]"
    >
      subtask name from db
      <div class="overflow-y-scroll scrollbar-hide">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="p-3 m-3 bg-slate-50 h-[12rem] w-[49rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
        >
          {{ card.cardName }}
          -> Date created, due date, urgent, not urgent, description, assign
          people
        </div>
      </div>
    </div>
    <div
      class="bg-slate-50 m-3 h-[56rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
    >
      Comments here
    </div>
  </div>
</template>
