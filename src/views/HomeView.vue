<script setup>
import { Menu, Github, Facebook, ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <main>
    <div class="flex flex-col w-screen h-screen px-32 bg-[#2b2f32]">
      <div class="flex h-32 justify-between items-center">
        <div class="flex items-center w-40">
          <h6 class="font-mono font-bold text-xl text-slate-50">
            Johnny <span class="font-normal">Roger</span>
          </h6>
        </div>
        <div class="flex flex-grow justify-center items-center w-40">
          <p class="font-mono text-lg text-slate-50">+639972430944 / jrdemadara@protonmail.com</p>
        </div>
        <div
          class="flex justify-center items-center w-fit h-fit p-2 rounded-full ring-2 ring-gray-600"
        >
          <Menu :size="24" class="text-slate-50" />
        </div>
      </div>
      <div class="flex flex-row w-full h-full mt-10">
        <div class="flex flex-col justify-between w-40">
          <div class="flex">
            <h2 class="font-mono font-normal text-6xl text-slate-50">01</h2>
          </div>

          <div class="flex flex-col h-fit pb-12">
            <Github :size="24" class="text-slate-50 mb-8" />
            <Facebook :size="24" class="text-slate-50" />
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-full mt-32">
            <div class="flex flex-col">
              <p class="bg-green-500 w-fit h-fit p-2 rounded-lg text-slate-50 text-sm font-mono">
                Fullstack Developer
              </p>
              <h2 class="font-mono text-6xl text-slate-50 mt-4">
                Talk is cheap. <br />
                Show me the code
              </h2>
              <p class="font-mono text-lg text-gray-400 mt-4">
                Passionate Full-Stack Developer. Crafting seamless web apps. <br />
                Embracing challenges, staying updated.
              </p>
              <div
                class="animate-pulse flex justify-center items-center w-fit h-fit p-6 mt-5 rounded-full ring-2 ring-green-500"
              >
                <ChevronRight :size="32" class="text-slate-50" />
              </div>
              <div class="flex flex-row w-fit h-fit mt-24">
                <div class="flex justify-center items-center mr-8">
                  <h4 class="font-mono text-5xl font-bold text-slate-50 mr-1">4</h4>
                  <p class="font-mono text-slate-50 leading-tight">YEARS <br />EXPERIENCE</p>
                </div>
                <div class="flex justify-center items-center">
                  <h4 class="font-mono text-5xl font-bold text-slate-50 mr-1">18</h4>
                  <p class="font-mono text-slate-50 leading-tight">
                    PROJECTS <br />
                    DEPLOYED
                  </p>
                </div>
              </div>
              <div class="w- bg-neutral-600 mt-16 mr-36">
                <div class="h-1 bg-green-500" style="width: 35%"></div>
              </div>
            </div>
          </div>

          <div class="relative flex w-full">
            <div
              class="absolute w-[50rem] h-[50rem] rounded-full bg-gradient-to-r from-[#262a2d] to-transparent"
            ></div>
            <div
              class="absolute flex justify-center items-center bg-[#23272B] w-20 h-20 rounded-full shadow-xl top-72 right-56"
            >
              <img src="@/assets/debian.svg" alt="" srcset="" class="animate-pulse w-7" />
            </div>
            <div class="absolute flex justify-center w-full h-full pt-32">
              <img src="@/assets/me.png" alt="image" />
            </div>
            <div
              class="absolute flex justify-center items-center bg-[#23272B] w-36 h-36 rounded-full shadow-xl bottom-52"
            >
              <img src="@/assets/logo.svg" alt="" srcset="" class="animate-pulse w-14" />
            </div>

            <div
              class="absolute flex justify-center items-center bg-[#23272B] w-24 h-24 rounded-full shadow-xl top-32 left-24"
            >
              <img src="@/assets/node.png" alt="" srcset="" class="animate-pulse w-8" />
            </div>

            <div
              class="absolute flex justify-center items-center bg-[#23272B] w-40 h-40 rounded-full shadow-xl bottom-60 right-8"
            >
              <img src="@/assets/laravel.png" alt="" srcset="" class="animate-pulse w-16" />
            </div>
            <div
              class="absolute flex justify-center items-center bg-[#23272B] w-16 h-16 rounded-full shadow-xl top-20 right-52"
            >
              <img src="@/assets/python.png" alt="" srcset="" class="animate-pulse w-5" />
            </div>
            <div
              class="absolute flex justify-center items-center bg-[#23272B] w-10 h-10 rounded-full shadow-xl top-52 right-20"
            >
              <img src="@/assets/kotlin.png" alt="" srcset="" class="animate-pulse w-3" />
            </div>
            <div
              class="absolute flex justify-center items-center bg-[#23272B] w-14 h-14 rounded-full shadow-xl top-80 left-40"
            >
              <img src="@/assets/postgre.png" alt="" srcset="" class="animate-pulse w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- lgc
extrace
rebox

prodtrend
ptmkapamilya
advance
bls
stmmon
employee mon 
sk website

stl
ndcot admin
ndcot student
ndparang admin
ndparang student
rtu api
lawyers api
idnow updater -->
