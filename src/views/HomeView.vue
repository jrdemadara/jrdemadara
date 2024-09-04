<script setup>
import { HeartHandshake, ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <div class="flex w-full">
    <div class="w-full mt-16">
      <div class="flex flex-col">
        <p class="select-none bg-gradient-to-tr from-slate-700 to-neutral-700 w-fit h-fit px-3 py-1 mt-8 rounded-lg text-slate-50 text-sm font-mono">Fullstack Developer</p>
        <h2 class="select-none font-mono text-6xl text-slate-50 mt-3">
          Crafting Code<br />
          Shaping Vision
        </h2>
        <p class="select-none font-mono text-lg text-slate-400 mt-8">
          Passionate Full-Stack Developer. <br />
          Embracing challenges, staying updated.
        </p>
        <div class="flex mt-8">
          <router-link to="/services">
            <div class="group/offer flex justify-center items-center w-56 h-14 px-8 py-4 mt-8 mr-8 rounded-full ring-2 ring-green-500">
              <h6 class="select-none group-hover/offer:text-green-500 font-mono text-lg text-slate-50 mr-2">My Services</h6>
              <ChevronRight :size="24" class="group-hover/offer:text-green-500 text-slate-50" />
            </div>
          </router-link>

          <router-link to="/contact">
            <div class="relative flex justify-center items-center">
              <div class="flex justify-center items-center w-48 h-14 px-8 py-4 mt-8 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-500 z-10">
                <h6 class="select-none font-mono text-lg text-slate-50 mr-2">Hire me!</h6>
                <HeartHandshake :size="24" class="group-hover/offer:text-green-500 text-slate-50" />
              </div>
              <div class="animate-ping absolute flex justify-center items-center w-32 h-14 px-8 py-4 mt-8 rounded-full ring-1 ring-green-500"></div>
            </div>
          </router-link>
        </div>

        <div class="flex flex-row w-fit h-fit mt-28">
          <div class="flex justify-center items-center mr-8">
            <h4 class="select-none font-mono text-5xl font-bold text-slate-50 mr-1">5</h4>
            <p class="select-none font-mono text-slate-50 leading-tight">YEARS <br />EXPERIENCE</p>
          </div>
          <div class="flex justify-center items-center">
            <h4 class="select-none font-mono text-5xl font-bold text-slate-50 mr-1">26</h4>
            <p class="select-none font-mono text-slate-50 leading-tight">
              PROJECTS <br />
              DEPLOYED
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex w-full">
      <div class="absolute w-[50rem] h-[50rem] rounded-full bg-gradient-to-r from-slate-950/40 via-slate-950/30 to-transparent"></div>
      <div class="absolute flex justify-center items-center bg-slate-900 w-20 h-20 rounded-full shadow-2xl top-72 right-52">
        <img src="@/assets/image/debian.svg" alt="" srcset="" class="animate-pulse w-7" />
      </div>
      <div class="absolute flex justify-center items-center bg-slate-900 w-36 h-36 rounded-full shadow-2xl bottom-52 left-4">
        <img src="@/assets/image/logo.svg" alt="" srcset="" class="animate-pulse w-14" />
      </div>
      <div class="absolute flex justify-center w-full h-full pt-32">
        <img src="@/assets/image/me.png" alt="image" class="brightness-90 contrast-100" />
      </div>
      <div class="absolute flex justify-center items-center bg-slate-900 w-24 h-24 rounded-full shadow-2xl top-32 left-24">
        <img src="@/assets/image/node.png" alt="" srcset="" class="animate-pulse w-8" />
      </div>

      <div class="absolute flex justify-center items-center bg-slate-900 w-40 h-40 rounded-full shadow-2xl bottom-60 right-8">
        <img src="@/assets/image/laravel.png" alt="" srcset="" class="animate-pulse w-16" />
      </div>
      <div class="absolute flex justify-center items-center bg-slate-900 w-16 h-16 rounded-full shadow-2xl top-20 right-52">
        <img src="@/assets/image/python.png" alt="" srcset="" class="animate-pulse w-5" />
      </div>
      <div class="absolute flex justify-center items-center bg-slate-800 w-10 h-10 rounded-full shadow-2xl top-52 right-20">
        <img src="@/assets/image/kotlin.png" alt="" srcset="" class="animate-pulse w-3" />
      </div>
      <div class="absolute flex justify-center items-center bg-slate-900 w-14 h-14 rounded-full shadow-2xl top-80 left-40">
        <img src="@/assets/image/postgre.png" alt="" srcset="" class="animate-pulse w-5" />
      </div>
      <div class="animate-bounce absolute flex justify-center items-center bg-green-400 w-3 h-3 rounded-full shadow-2xl top-64"></div>
      <div class="absolute flex justify-center items-center bg-slate-900 w-20 h-20 rounded-full shadow-2xl bottom-10 left-40">
        <img src="@/assets/image/electron.png" alt="" srcset="" class="animate-pulse w-6" />
      </div>
      <div class="animate-bounce absolute flex justify-center items-center bg-slate-950 w-6 h-6 rounded-full shadow-2xl bottom-20 right-10"></div>
    </div>
  </div>
</template>
