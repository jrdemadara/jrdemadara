<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="flex flex-col w-screen h-screen px-32 bg-slate-700">

      <div class="flex h-20 justify-between bg-slate-500">
        <div class="w-40 bg-indigo-500"></div>
        <div class="w-40 bg-indigo-500"></div>
        <div class="w-40 bg-indigo-500"></div>
      </div>
      <div class="flex flex-row w-full h-full bg-slate-600">
        <div class="flex flex-col justify-between w-40 bg-slate-500">
          <div class="h-32 bg-indigo-500"></div>
          <div class="h-32 bg-indigo-500"></div>
        </div>
        <div class="w-full bg-violet-500">
          <div class="relative w-full h-96">
            <div class="w-96 h-96 rounded-full bg-slate-200"></div>
            <div class="absolute">
              <p>Absolute child</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>
