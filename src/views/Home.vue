<template>
  <div class="relative max-h-screen">
    <div
      class="flex items-center px-[4rem] h-[5rem] w-full bg-slate-600 border-b border-slate-100 absolute z-10 justify-between"
    >
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[3rem] h-[3rem] items-center text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>

        <p class="text-white text-3xl font-bold items-center">Deskbink</p>
      </div>
      <div class="flex gap-5">
        <button
          class="flex font-semibold items-center text-white gap-2 bg-green-400 px-3 py-2 rounded-3xl hover:bg-green-500"
          @click="$router.push('/login')"
        >
         Login 
        </button>
        <button
          class="flex font-semibold items-center text-white gap-2 bg-green-400 px-3 py-2 rounded-3xl hover:bg-green-500"
          @click="$router.push('/about')"
        >
          About
        </button>
        <button
          class="flex font-semibold items-center text-white gap-2 bg-green-400 px-3 py-2 rounded-3xl hover:bg-green-500"
        >
          <i class="devicon-github-original text-2xl"></i>
          <a href="https://github.com/jakeNorman007/deskbink">Github</a>
        </button>
      </div>
    </div>
    <div
      class="h-[45rem] mt-[-20rem] absolute origin-bottom skew-y-12 w-full bg-green-400 z-0"
    ></div>
    <div class="grid justify-center absolute z-50 mt-[20rem] ml-[16rem]">
      <p class="text-4xl font-semibold text-slate-900 leading-none">
        Deskbink helps your team stay organized.
      </p>
      <p class="text-lg text-slate-900 mt-3 font-semibold">
        Keep your projects on track, collaborate and reach new levels of
        productivity. Change <br />
        the way your team works and accomplishes it's goals.
      </p>
      <button
        class="mt-4 justify-self-start bg-green-400 px-3 py-3 rounded-md text-white font-semibold hover:bg-green-500"
        @click="$router.push('/dashboard')"
      >
      Go to demo
      </button>
    </div>
  </div>
</template>

<script></script>
