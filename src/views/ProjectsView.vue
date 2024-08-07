<script setup lang="ts">
import { GalleryVertical } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
      <GalleryVertical :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
      <p class="select-none font-mono text-sm text-slate-50">PROJECTS</p>
    </div>
    <h2 class="select-none font-mono mt-12 text-4xl text-slate-50">Featured <span class="text-green-500">Projects</span></h2>
    <div class="grid grid-cols-5 mt-8">
      <img src="@/assets/image/temp/m1.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
      <img src="@/assets/image/temp/m2.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
      <img src="@/assets/image/temp/m3.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
      <img src="@/assets/image/temp/m4.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
      <img src="@/assets/image/temp/m5.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
    </div>
  </div>
</template>
