<template>
  <div class="relative">
    <div
      class="flex items-center px-[4rem] h-[5rem] w-full bg-slate-950 absolute z-10"
    >
      <p class="text-white">Navbar goes here</p>
    </div>
    <div
      class="h-[45rem] mt-[-20rem] absolute origin-bottom skew-y-12 w-full bg-green-400 z-0"
    ></div>
    <div
      class="flex justify-center absolute z-50 mt-[23rem] ml-[16rem] text-4xl gap-5"
    >
      <h1>Project Management home page.</h1>
      <button @click="$router.push('/dashboard')">Go to dashboard</button>
    </div>
  </div>
</template>

<script></script>
