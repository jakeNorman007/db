<script setup>
import { Teleport, ref } from "vue";
import DescriptionIcon from "../icons/DescriptionIcon.vue";
import { useBoard } from "../views/BoardQueries/useGetBoard";

const { board } = useBoard();
const modalOpen = ref(false);
</script>

<template>
  <button
    @click="modalOpen = true"
    class="font-semibold ml-[1rem] text-lg bg-green-200 px-4 py-3 rounded-full hover:bg-green-300"
  >
    <div class="flex gap-2 items-center">
      <DescriptionIcon />Project description
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
        class="flex flex-col bg-slate-50 rounded-md fixed z-[999] w-[30rem] h-[18rem] ml-[-150px] left-[45%] top-[15%]"
      >
        <p class="px-6 pt-[1rem] font-semibold text-xl">Project description</p>
        <div class="py-[1rem] text-lg mx-6">
          {{ board.description }}
        </div>
        <div>
          <button
            @click="modalOpen = false"
            class="bg-green-200 hover:bg-green-300 ml-6 w-[27rem] rounded-full mt-2 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
