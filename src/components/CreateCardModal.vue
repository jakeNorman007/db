<script setup>
import AddBoardIcon from "../icons/AddBaordIcon.vue";
import { Teleport, ref } from "vue";
import { useCreateCard } from "../views/CardQueries/useCreateCard";
import { useRoute } from "vue-router";

const { isCreating, createCard } = useCreateCard();
const modalOpen = ref(false);
const cardName = ref("");
const route = useRoute();
const list_id = route.params.listId;
</script>

<template>
  <button
    @click="modalOpen = true"
    class="font-semibold ml-[3rem] text-lg bg-green-200 px-4 py-3 rounded-full hover:bg-green-300"
  >
    <div class="flex gap-2"><AddBoardIcon />New card</div>
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
        class="flex flex-col bg-slate-50 rounded-md fixed z-[999] w-[30rem] h-[14rem] ml-[-150px] left-[45%] top-[15%]"
      >
        <p class="px-6 py-[1rem] font-semibold text-xl">Create new Card</p>
        <form @submit="createCard({ cardName, list_id: list_id })">
          <div class="my-3">
            <label class="text-sm text-slate-500 font-semibold px-6"
              >Card name</label
            >
            <input
              type="text"
              required
              maxlength="20"
              v-model="cardName"
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
            Create card
          </button>
        </form>
      </div>
    </Teleport>
  </div>
</template>
