<template>
  <div class="relative flex items-center">
    <div
      class="absolute flex h-[6rem] -left-[5rem] w-[6rem] bg-slate-300 rounded-full items-center justify-center
        border-2 border-green-600"
    >
      Avatar
    </div>
    <div
      class="flex h-[4rem] w-[12rem] bg-slate-600 rounded-md text-white items-center justify-center font-semibold
        border-t border-slate-400"
    >
      User's name here
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
};
</script>
