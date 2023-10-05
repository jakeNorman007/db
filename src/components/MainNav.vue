<script setup></script>

<template>
  <nav class="flex h-screen bg-slate-50 border-r border-green-100">
    <ul>
      <li class="p-[2rem] font-bold text-3xl mb-[2rem]">deskbink \\\</li>
      <div>
        <li
          @click="$router.push('/')"
          class="focus:bg-green-300 cursor-pointer font-semibold px-6 py-[1rem] hover:w-[14rem] hover:py-[1rem] hover:bg-green-200 hover:rounded-r-3xl"
        >
          Home
        </li>
        <li
          @click="$router.push('/dashboard')"
          class="active:bg-green-300 cursor-pointer font-semibold px-6 py-[1rem] hover:w-[14rem] hover:py-[1rem] hover:bg-green-200 hover:rounded-r-3xl"
        >
          Dashboard
        </li>
        <li
          @click="$router.push('/about')"
          class="font-semibold px-6 py-[1rem] hover:w-[14rem] hover:py-[1rem] hover:bg-green-200 hover:rounded-r-3xl"
        >
          About
        </li>
        <li
          class="font-semibold px-6 py-[1rem] hover:w-[14rem] hover:py-[1rem] hover:bg-green-200 hover:rounded-r-3xl"
        >
          <i class="devicon-github-original pr-2"></i>
          <a href="https://github.com/jakeNorman007/deskbink">Github</a>
        </li>
      </div>
    </ul>
  </nav>
</template>
