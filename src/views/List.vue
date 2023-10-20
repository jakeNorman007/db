<script setup>
import { useCards } from "./CardQueries/useCards";
import { useGetList } from "../views/ListQueries/useGetList";
import { format } from "date-fns";

const { list } = useGetList();
const { cards } = useCards();
</script>

<template>
  <div class="grid grid-cols-2 gap-[1rem]">
    <div
      class="flex flex-col ml-[1rem] font-semibold text-lg w-[50rem] h-[57rem]"
    >
    {{ list?.listName }} ({{ cards?.length }})
      <div class="overflow-y-scroll scrollbar-hide">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="p-3 m-3 bg-slate-50 h-[12rem] w-[49rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
        >
        {{ card.cardName }} {{ format(new Date(card.created_at), "MMM dd yyyy") }}
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
