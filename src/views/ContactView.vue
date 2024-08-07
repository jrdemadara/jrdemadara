<script setup lang="ts">
import { Phone, Send } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
      <Phone :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
      <p class="select-none font-mono text-sm text-slate-50">CONTACT</p>
    </div>
    <h2 class="select-none font-mono mt-12 text-4xl text-slate-50">Let's Get Things <span class="text-green-500">Done</span></h2>
    <div class="flex flex-col mt-8">
      <div class="flex flex-col w-1/2">
        <label for="fullname" class="text-mono text-slate-50">Fullname <span class="text-red-400">*</span></label>
        <input type="text" name="fullname" id="fullname" class="text-mono bg-transparent border rounded-lg h-12 border-slate-300 mt-2" />
      </div>
      <div class="flex flex-col w-1/2 mt-5">
        <label for="message" class="text-mono text-slate-50">Message <span class="text-red-400">*</span></label>
        <textarea type="text" name="message" id="message" class="text-mono bg-transparent border rounded-lg h-20 border-slate-300 mt-2" />
      </div>
      <div class="flex flex-col w-1/2 mt-5">
        <label for="email" class="text-mono text-slate-50">Email <span class="text-red-400">*</span></label>
        <input type="email" name="email" id="email" class="text-mono bg-transparent border rounded-lg h-12 border-slate-300 mt-2" />
      </div>
      <button class="flex justify-center items-center w-40 h-14 rounded-full p-5 mt-6 border border-green-500 hover:bg-green-500">
        <Send :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
        <h6 class="select-none group-hover/offer:text-green-500 font-mono text-lg text-slate-50 mr-2">Send</h6>
      </button>
    </div>
  </div>
</template>
