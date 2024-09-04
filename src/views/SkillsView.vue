<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
      <Gauge :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
      <p class="select-none font-mono text-sm text-slate-50">SKILLS</p>
    </div>
    <h2 class="select-none font-mono mt-12 text-4xl text-slate-50">My <span class="text-green-500">Advantages</span></h2>
    <div class="grid grid-cols-8 gap-6 mt-8 w-fit">
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/laravel.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">92%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/logo.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">87%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/node.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">82%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/nestjs.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">78%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/kotlin.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">85%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/java.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">94%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/python.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">82%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/electron.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">82%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/tailwind.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">85%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/postgre.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">92%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/redis.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">78%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/docker.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">82%</h6>
      </div>
      <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-12 py-12 rounded-full ring-1 ring-slate-600">
        <img src="@/assets/image/linux.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
        <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">94%</h6>
      </div>
    </div>
  </div>
</template>
