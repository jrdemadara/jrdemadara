<script setup>
import { DollarSign } from 'lucide-vue-next'
import { Monitor } from 'lucide-vue-next'
import { Network } from 'lucide-vue-next'
import { TabletSmartphone } from 'lucide-vue-next'
import {
  Menu,
  ChevronRight,
  Home,
  Rocket,
  Building,
  Phone,
  GalleryVertical,
  Computer,
  LayoutTemplate
} from 'lucide-vue-next'
import { ref } from 'vue'

const section = ref(1)
const section2 = () => {
  // Reset the form state to the initial state.
  section.value = 2
}
</script>

<template>
  <main>
    <div class="flex flex-col w-screen h-screen px-32 bg-slate-900">
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
      <div class="relative flex flex-row w-full h-full mt-10">
        <div class="flex flex-col justify-between w-40">
          <div class="flex">
            <Transition>
              <h2 v-if="section" class="font-mono font-normal text-6xl text-slate-50">
                {{
                  section === 1
                    ? '01'
                    : section === 2
                      ? '02'
                      : section === 3
                        ? '03'
                        : section === 4
                          ? '04'
                          : section === 5
                            ? '05'
                            : section === 6
                              ? '06'
                              : '07'
                }}
              </h2>
            </Transition>
          </div>

          <div class="flex flex-col justify-center items-start h-fit pb-12">
            <a href="#" target="_blank" rel="noopener noreferrer" class="mb-6">
              <img src="@/assets/github.svg" alt="github" class="w-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/facebook.svg" alt="github" class="w-10" />
            </a>
          </div>
        </div>
        <Transition name="slide-fade" mode="out-in">
          <div class="flex w-full" v-show="section === 1">
            <div class="w-full mt-32">
              <div class="flex flex-col">
                <p class="bg-green-500 w-fit h-fit p-2 rounded-lg text-slate-50 text-sm font-mono">
                  Fullstack Developer
                </p>
                <h2 class="font-mono text-6xl text-slate-50 mt-2">
                  Talk is cheap. <br />
                  Show me the code.
                </h2>
                <p class="font-mono text-lg text-slate-400 mt-4">
                  Passionate Full-Stack Developer. Crafting seamless web apps. <br />
                  Embracing challenges, staying updated.
                </p>
                <div
                  @click="section = 2"
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
              </div>
            </div>

            <div class="relative flex w-full">
              <div
                class="absolute w-[50rem] h-[50rem] rounded-full bg-gradient-to-r from-slate-950/40 via-slate-950/30 to-transparent"
              ></div>
              <div
                class="absolute flex justify-center items-center bg-slate-900 w-20 h-20 rounded-full shadow-2xl top-72 right-56"
              >
                <img src="@/assets/debian.svg" alt="" srcset="" class="animate-pulse w-7" />
              </div>
              <div
                class="absolute flex justify-center items-center bg-slate-900 w-36 h-36 rounded-full shadow-2xl bottom-52 left-4"
              >
                <img src="@/assets/logo.svg" alt="" srcset="" class="animate-pulse w-14" />
              </div>
              <div class="absolute flex justify-center w-full h-full pt-32">
                <img src="@/assets/me.png" alt="image" />
              </div>
              <div
                class="absolute flex justify-center items-center bg-slate-900 w-24 h-24 rounded-full shadow-2xl top-32 left-24"
              >
                <img src="@/assets/node.png" alt="" srcset="" class="animate-pulse w-8" />
              </div>

              <div
                class="absolute flex justify-center items-center bg-slate-900 w-40 h-40 rounded-full shadow-2xl bottom-60 right-8"
              >
                <img src="@/assets/laravel.png" alt="" srcset="" class="animate-pulse w-16" />
              </div>
              <div
                class="absolute flex justify-center items-center bg-slate-900 w-16 h-16 rounded-full shadow-2xl top-20 right-52"
              >
                <img src="@/assets/python.png" alt="" srcset="" class="animate-pulse w-5" />
              </div>
              <div
                class="absolute flex justify-center items-center bg-slate-800 w-10 h-10 rounded-full shadow-2xl top-52 right-20"
              >
                <img src="@/assets/kotlin.png" alt="" srcset="" class="animate-pulse w-3" />
              </div>
              <div
                class="absolute flex justify-center items-center bg-slate-900 w-14 h-14 rounded-full shadow-2xl top-80 left-40"
              >
                <img src="@/assets/postgre.png" alt="" srcset="" class="animate-pulse w-5" />
              </div>
              <div
                class="animate-bounce absolute flex justify-center items-center bg-green-400 w-3 h-3 rounded-full shadow-2xl top-64"
              ></div>
              <div
                class="absolute flex justify-center items-center bg-slate-900 w-20 h-20 rounded-full shadow-2xl bottom-10 left-40"
              >
                <img src="@/assets/electron.png" alt="" srcset="" class="animate-pulse w-6" />
              </div>
              <div
                class="animate-bounce absolute flex justify-center items-center bg-slate-950 w-6 h-6 rounded-full shadow-2xl bottom-20 right-10"
              ></div>
            </div>
          </div>
        </Transition>

        <Transition name="slide-fade" mode="out-in">
          <div v-show="section === 2" class="flex flex-col w-full">
            <h2 class="font-mono text-4xl text-slate-50">
              My <span class="text-green-400">Specializations</span>
            </h2>
            <div class="grid grid-cols-2 gap-8 mt-20">
              <div
                class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600"
              >
                <div class="flex justify-between items-center">
                  <h4 class="group-hover/service:text-green-400 font-mono text-2xl text-slate-50">
                    Web App
                  </h4>
                  <LayoutTemplate
                    :size="24"
                    class="group-hover/service:text-green-400 text-slate-50"
                  />
                </div>
                <p class="font-mono text-slate-400 leading-tight mt-3">
                  Elevate your business online with my expertise in custom web applications.
                </p>
                <h6
                  class="font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6"
                >
                  11 PROJECTS
                </h6>
              </div>

              <div
                class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600"
              >
                <div class="flex justify-between items-center">
                  <h4 class="group-hover/service:text-green-400 font-mono text-2xl text-slate-50">
                    Mobile App
                  </h4>
                  <TabletSmartphone
                    :size="24"
                    class="group-hover/service:text-green-400 text-slate-50"
                  />
                </div>
                <p class="font-mono text-slate-400 leading-tight mt-3">
                  Fuel business growth with my expertise in custom mobile app development.
                </p>
                <h6
                  class="font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6"
                >
                  4 PROJECTS
                </h6>
              </div>

              <div
                class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600"
              >
                <div class="flex justify-between items-center">
                  <h4 class="group-hover/service:text-green-400 font-mono text-2xl text-slate-50">
                    Desktop App
                  </h4>
                  <Monitor :size="24" class="group-hover/service:text-green-400 text-slate-50" />
                </div>
                <p class="font-mono text-slate-400 leading-tight mt-3">
                  Elevate you solutions by crafting powerful desktop apps for enhanced user
                  experiences.
                </p>
                <h6
                  class="font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6"
                >
                  3 PROJECTS
                </h6>
              </div>

              <div
                class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600"
              >
                <div class="flex justify-between items-center">
                  <h4 class="group-hover/service:text-green-400 font-mono text-2xl text-slate-50">
                    API Development
                  </h4>
                  <Network :size="24" class="group-hover/service:text-green-400 text-slate-50" />
                </div>
                <p class="font-mono text-slate-400 leading-tight mt-3">
                  Elevate connectivity with precise API development. Unlock seamless data
                  integration and efficiency.
                </p>
                <h6
                  class="font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6"
                >
                  3 PROJECTS
                </h6>
              </div>
            </div>
          </div>
        </Transition>

        <div v-show="section === 3"></div>

        <div v-show="section === 4"></div>

        <div class="absolute w-96 rounded-full bg-slate-600 bottom-32 left-36">
          <div class="h-1 rounded-full bg-green-500" style="width: 17.66%"></div>
        </div>

        <div class="absolute w-14 h-fit rounded-full top-32 -right-16 ring-2 ring-slate-800">
          <div class="flex flex-col justify-center items-center">
            <button
              @click="section = 1"
              class="mt-7 mb-7"
              :class="{ 'text-green-500': section === 1, 'text-slate-500': section !== 1 }"
            >
              <Home :size="26" :stroke-width="1" />
            </button>
            <button
              @click="section = 2"
              class="mb-7"
              :class="{ 'text-green-500': section === 2, 'text-slate-500': section !== 2 }"
            >
              <Computer :size="26" :stroke-width="1" />
            </button>
            <button
              @click="section = 3"
              class="mb-7"
              :class="{ 'text-green-500': section === 3, 'text-slate-500': section !== 3 }"
            >
              <Rocket :size="26" :stroke-width="1" />
            </button>
            <button
              @click="section = 4"
              class="mb-7"
              :class="{ 'text-green-500': section === 4, 'text-slate-500': section !== 4 }"
            >
              <GalleryVertical :size="26" :stroke-width="1" />
            </button>
            <button
              @click="section = 5"
              class="mb-7"
              :class="{ 'text-green-500': section === 5, 'text-slate-500': section !== 5 }"
            >
              <Building :size="26" :stroke-width="1" />
            </button>
            <button
              @click="section = 6"
              class="mb-7"
              :class="{ 'text-green-500': section === 6, 'text-slate-500': section !== 6 }"
            >
              <DollarSign :size="26" :stroke-width="1" />
            </button>
            <button
              @click="section = 7"
              class="mb-7"
              :class="{ 'text-green-500': section === 7, 'text-slate-500': section !== 7 }"
            >
              <Phone :size="26" :stroke-width="1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
<!-- 
-PAGES-
Main
My Specialization
My Advantages
Feature Projects
Clients
Connect with me
 -->

<!--
-COMPLETED-
lgc
extrace
rebox
ptmkapamilya
prodtrend
advancegas
bls
stmmon
employee mon

stl
ndcot admin
ndcot student
ndparang admin
ndparang student
rtu api
lawyers api

-ON-PROGRESS-
idnow updater
sk website

-UPCOMING-
rarenet
ndcot alumni tracking
-->
