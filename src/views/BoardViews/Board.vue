<script setup>
import { useBoard } from "./useGetBoard";

const { isLoading, board } = useBoard();
</script>

<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        {{board}}
    </div>
</template>
