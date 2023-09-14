<template>
  <div
    class="flex gap-4 justify-between px-4 bg-slate-700 text-white h-[3.5rem] items-center
        border-b border-slate-100"
  >
    <button @click="$router.replace('/')" class="text-xl font-semibold">Deskbink</button>
    <div class="flex gap-4">
      <button @click="$router.replace('/dashboard')">Dashboard</button>
      <button>User's id page</button>
      <!-- Needs logic to toggle log in and out. For now this is fine --> 
      <button>Login</button>
      <button>Logout</button>
    </div>
  </div>
</template>

<script setup></script>
