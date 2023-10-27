<script setup>
import CreateCardModal from "../components/CreateCardModal.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import { useDeleteCard } from "../views/CardQueries/useDeleteCard";
import { useCards } from "./CardQueries/useCards";
import { useGetList } from "../views/ListQueries/useGetList";
import { format } from "date-fns";

const { isDeleting, deleteCard } = useDeleteCard();
const { list } = useGetList();
const { cards } = useCards();
</script>

<template>
  <div class="grid grid-cols-2 gap-[1rem]">
    <div
      class="flex flex-col ml-[1rem] font-semibold text-lg w-[50rem] h-[57rem]"
    >
      <div class="text-3xl font-semibold mx-3 my-4">
          {{ list?.listName }} ({{ cards?.length }})<CreateCardModal />
      </div>
      <div class="overflow-y-scroll scrollbar-hide">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="p-3 m-3 bg-slate-50 h-[12rem] w-[49rem] rounded-md shadow-md shadow-slate-300 border-t-2 border-slate-200"
        >
          <div>
            Task: {{ card.cardName }}
          </div>
          <div>
          Date created: {{ format(new Date(card.created_at), "MMM dd yyyy") }}
          </div>
          <button @click="deleteCard(card.id)" :disabled="isDeleting">
            <DeleteIcon />
          </button>
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
