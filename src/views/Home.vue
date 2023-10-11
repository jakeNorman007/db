<script setup>
</script>

<template>
  <div class="relative max-h-screen">
    <div
      class="flex items-center px-[4rem] h-[5rem] w-full bg-slate-50 border-b border-green-400 absolute z-10 justify-between"
    >
        <p class="text-3xl font-bold items-center">deskbink \\\</p>
      <div class="flex gap-5">
        <button
          class="flex font-semibold items-center shadow-inner gap-2 bg-green-300 px-3 py-2 rounded-full hover:bg-green-200"
          @click="$router.push('/about')"
        >
          Learn more
        </button>
        <button
          class="flex font-semibold items-center shadow-inner gap-2 bg-green-300 px-3 py-2 rounded-full hover:bg-green-200"
        >
          <i class="devicon-github-original text-2xl"></i>
          <a href="https://github.com/jakeNorman007/deskbink">Github</a>
        </button>
      </div>
    </div>
    <div
      class="h-[45rem] mt-[-20rem] absolute origin-bottom skew-y-12 w-full bg-green-300 z-0"
    ></div>
    <div class="grid justify-center absolute z-50 mt-[20rem] ml-[16rem]">
      <p class="text-4xl font-semibold text-black leading-none">
        Deskbink helps your team stay organized.
      </p>
      <p class="text-lg text-black mt-3 font-semibold">
        Keep your projects on track, collaborate and reach new levels of
        productivity. Change <br />
        the way your team works and accomplishes it's goals.
      </p>
      <button
        class="mt-4 justify-self-start bg-green-300 px-3 py-3 rounded-full text-black font-semibold hover:bg-green-200"
        @click="$router.push('/dashboard')">
      Go to demo
      </button>
    </div>
  </div>
</template>
