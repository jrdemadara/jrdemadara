<script setup>
import { DollarSign } from 'lucide-vue-next'
import { Monitor } from 'lucide-vue-next'
import { Mail } from 'lucide-vue-next'
import { Gauge } from 'lucide-vue-next'
import { HeartHandshake } from 'lucide-vue-next'
import { Network } from 'lucide-vue-next'
import { TabletSmartphone } from 'lucide-vue-next'
import { Menu, ChevronRight, Home, Rocket, Building, Phone, GalleryVertical, Computer, LayoutTemplate } from 'lucide-vue-next'
import { ref } from 'vue'

const section = ref(1)
const section2 = () => {
  // Reset the form state to the initial state.
  section.value = 2
}
</script>

<template>
  <main>
    <div class="flex flex-col w-screen h-screen px-32 bg-gradient-to-br from-slate-950 to-slate-900">
      <div class="flex h-32 justify-between items-center">
        <div class="flex items-center w-40">
          <h6 class="font-mono font-bold text-xl text-slate-50">Johnny <span class="font-normal">Roger</span></h6>
        </div>
        <div class="flex flex-grow justify-center items-center w-40">
          <p class="font-mono text-lg text-slate-50">+639972430944 / jrdemadara@protonmail.com</p>
        </div>
        <div class="flex justify-center items-center w-fit h-fit p-2 rounded-full ring-2 ring-gray-600">
          <Menu :size="24" class="text-slate-50" />
        </div>
      </div>
      <div class="relative flex flex-row w-full h-full mt-10">
        <div class="flex flex-col justify-between w-40">
          <div class="flex">
            <Transition>
              <h2 v-if="section" class="select-none font-mono font-normal text-6xl text-green-50">
                {{ section === 1 ? '01' : section === 2 ? '02' : section === 3 ? '03' : section === 4 ? '04' : section === 5 ? '05' : section === 6 ? '06' : '07' }}
              </h2>
            </Transition>
          </div>

          <div class="flex flex-col justify-center items-start h-fit pb-12">
            <a href="#" target="_blank" rel="noopener noreferrer" class="mb-6">
              <img src="@/assets/image/github.svg" alt="github" class="w-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/image/facebook.svg" alt="github" class="w-10" />
            </a>
          </div>
        </div>
        <Transition name="slide-fade" mode="out-in">
          <div class="flex w-full" v-if="section === 1">
            <div class="w-full mt-32">
              <div class="flex flex-col">
                <p class="select-none bg-gradient-to-tr from-slate-700 to-neutral-700 w-fit h-fit px-3 py-1 rounded-lg text-slate-50 text-sm font-mono">Fullstack Developer</p>
                <h2 class="select-none font-mono text-6xl text-slate-50 mt-2">
                  Talk is cheap. <br />
                  Show me the code.
                </h2>
                <p class="select-none font-mono text-lg text-slate-400 mt-4">
                  Passionate Full-Stack Developer. Crafting seamless web apps. <br />
                  Embracing challenges, staying updated.
                </p>
                <div class="flex">
                  <div @click="section = 2" class="group/offer flex justify-center items-center w-56 h-14 px-8 py-4 mt-8 mr-8 rounded-full ring-2 ring-green-500">
                    <h6 class="select-none group-hover/offer:text-green-500 font-mono text-lg text-slate-50 mr-2">My Services</h6>
                    <ChevronRight :size="24" class="group-hover/offer:text-green-500 text-slate-50" />
                  </div>
                  <div @click="section = 7" class="relative flex justify-center items-center">
                    <div class="animate-ping absolute flex justify-center items-center w-28 h-10 px-8 py-4 mt-8 rounded-full ring-1 ring-green-500"></div>
                    <div class="flex justify-center items-center w-48 h-14 px-8 py-4 mt-8 rounded-full bg-green-500">
                      <h6 class="select-none font-mono text-lg text-slate-50 mr-2">Hire me!</h6>
                      <HeartHandshake :size="24" class="group-hover/offer:text-green-500 text-slate-50" />
                    </div>
                  </div>
                </div>

                <div class="flex flex-row w-fit h-fit mt-24">
                  <div class="flex justify-center items-center mr-8">
                    <h4 class="select-none font-mono text-5xl font-bold text-slate-50 mr-1">4</h4>
                    <p class="select-none font-mono text-slate-50 leading-tight">YEARS <br />EXPERIENCE</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <h4 class="select-none font-mono text-5xl font-bold text-slate-50 mr-1">18</h4>
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
              <div class="absolute flex justify-center items-center bg-slate-900 w-20 h-20 rounded-full shadow-2xl top-72 right-56">
                <img src="@/image/debian.svg" alt="" srcset="" class="animate-pulse w-7" />
              </div>
              <div class="absolute flex justify-center items-center bg-slate-900 w-36 h-36 rounded-full shadow-2xl bottom-52 left-4">
                <img src="@/assets/image/logo.svg" alt="" srcset="" class="animate-pulse w-14" />
              </div>
              <div class="absolute flex justify-center w-full h-full pt-32">
                <img src="@/assets/image/me.png" alt="image" />
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
        </Transition>

        <Transition name="slide-fade" mode="out-in">
          <div v-if="section === 2" class="flex flex-col w-full">
            <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
              <LayoutTemplate :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
              <p class="select-none font-mono text-sm text-slate-50">SERVICES</p>
            </div>
            <h2 class="select-none font-mono mt-16 text-4xl text-slate-50">My <span class="text-green-400">Specializations</span></h2>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600">
                <div class="flex justify-between items-center">
                  <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">Web App</h4>
                  <LayoutTemplate :size="24" class="group-hover/service:text-green-400 text-slate-50" />
                </div>
                <p class="select-none font-mono text-slate-400 leading-tight mt-3">Elevate your business online with my expertise in custom web applications.</p>
                <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">9 PROJECTS</h6>
              </div>

              <div class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600">
                <div class="flex justify-between items-center">
                  <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">Mobile App</h4>
                  <TabletSmartphone :size="24" class="group-hover/service:text-green-400 text-slate-50" />
                </div>
                <p class="select-none font-mono text-slate-400 leading-tight mt-3">Fuel business growth with my expertise in custom mobile app development.</p>
                <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">3 PROJECTS</h6>
              </div>

              <div class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600">
                <div class="flex justify-between items-center">
                  <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">Desktop App</h4>
                  <Monitor :size="24" class="group-hover/service:text-green-400 text-slate-50" />
                </div>
                <p class="select-none font-mono text-slate-400 leading-tight mt-3">Elevate you solutions by crafting powerful desktop apps for enhanced user experiences.</p>
                <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">4 PROJECTS</h6>
              </div>

              <div class="group/service hover:ring-green-400 flex flex-col justify-center h-52 p-10 rounded-lg ring-1 ring-slate-600">
                <div class="flex justify-between items-center">
                  <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">API Development</h4>
                  <Network :size="24" class="group-hover/service:text-green-400 text-slate-50" />
                </div>
                <p class="select-none font-mono text-slate-400 leading-tight mt-3">Elevate connectivity with precise API development. Unlock seamless data integration and efficiency.</p>
                <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">5 PROJECTS</h6>
              </div>
            </div>
          </div>
        </Transition>

        <Transition name="slide-fade" mode="out-in">
          <div v-if="section === 3" class="flex flex-col w-full">
            <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
              <Gauge :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
              <p class="select-none font-mono text-sm text-slate-50">SKILLS</p>
            </div>
            <h2 class="select-none font-mono mt-16 text-4xl text-slate-50">My <span class="text-green-500">Advantages</span></h2>
            <div class="grid grid-cols-10 gap-6 mt-8 w-fit">
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/laravel.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">92%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/logo.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">87%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/node.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">96%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/kotlin.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">85%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/java.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">94%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/python.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">82%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/electron.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">82%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/tailwind.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">98%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/postgre.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">96%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/redis.svg" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">78%</h6>
              </div>
              <div class="group/skill hover:ring-green-400 flex flex-col justify-center items-center w-fit h-fit px-8 py-10 rounded-full ring-1 ring-slate-600">
                <img src="@/assets/image/linux.png" alt="" srcset="" class="group-hover/skill:animate-pulse w-14 h-14" />
                <h6 class="select-none font-mono w-fit text-2xl text-green-500 group-hover/skill:text-green-400 cursor-default mt-4">94%</h6>
              </div>
            </div>
          </div>
        </Transition>

        <Transition name="slide-fade" mode="out-in">
          <div v-if="section === 4" class="flex flex-col w-full">
            <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
              <GalleryVertical :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
              <p class="select-none font-mono text-sm text-slate-50">PROJECTS</p>
            </div>
            <h2 class="select-none font-mono mt-16 text-4xl text-slate-50">Featured <span class="text-green-500">Projects</span></h2>
            <div class="grid grid-cols-5 mt-8">
              <img src="@/assets/image/temp/m1.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
              <img src="@/assets/image/temp/m2.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
              <img src="@/assets/image/temp/m3.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
              <img src="@/assets/image/temp/m4.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
              <img src="@/assets/image/temp/m5.jpg" alt="" srcset="" class="object-cover w-72 h-72 rounded-xl" />
            </div>
          </div>
        </Transition>

        <Transition name="slide-fade" mode="out-in">
          <div v-if="section === 6" class="flex flex-col w-full">
            <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
              <DollarSign :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
              <p class="select-none font-mono text-sm text-slate-50">PRICES</p>
            </div>
            <h2 class="select-none font-mono mt-10 text-4xl text-slate-50">Price <span class="text-green-500">Range</span></h2>
            <div class="flex">
              <div class="flex flex-col w-96 h-fit mt-8 mr-8 ring-1 ring-green-500 rounded-3xl p-5">
                <div class="flex flex-row">
                  <h6 class="font-mono text-lg text-slate-50 w-full">WEB APP</h6>
                  <p class="font-mono leading-tight text-sm py-2 w-full bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Basic to Brilliant</p>
                </div>
                <p class="font-mono text-slate-50 mt-8">Starts at</p>
                <div class="flex">
                  <h4 class="font-mono text-4xl font-bold mr-4 text-green-500">₱38,000</h4>
                  <p class="font-mono text-sm text-slate-400 py-0.5 leading-4 mr-2">Cost varies with scope & complexity.</p>
                </div>

                <div class="w-full h-0.5 bg-slate-600 rounded mt-3"></div>
                <ul class="list-image-checkmark font-mono text-sm text-slate-50 px-3.5 mt-6">
                  <li>Dynamic Content</li>
                  <li class="mt-2">Admin Panel</li>
                  <li class="mt-2">5 Page Website</li>
                  <li class="mt-2">Custom Design</li>
                  <li class="mt-2">6 Months Support</li>
                </ul>
                <span class="font-mono text-xs text-slate-400 mt-4">Optional Addons:</span>
                <div class="mt-1 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Fully Managed</label
                  >
                </div>
                <div class="mt-2 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Host it for me.</label
                  >
                </div>
                <div class="mt-2 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Extended Support <span class="text-xs text-green-400">(12 months)</span></label
                  >
                </div>
                <button class="w-full h-fit py-3 rounded-3xl bg-green-400 text-slate-40 font-mono mt-10 mb-2">PICK THIS PACKAGE</button>
              </div>
              <div class="flex flex-col w-96 h-fit mt-8 mr-8 ring-1 ring-green-500 rounded-3xl p-5">
                <div class="flex flex-row">
                  <h6 class="font-mono text-lg text-slate-50 w-full">WEB APP</h6>
                  <p class="font-mono leading-tight text-sm py-2 w-full bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Basic to Brilliant</p>
                </div>
                <p class="font-mono text-slate-50 mt-8">Starts at</p>
                <div class="flex">
                  <h4 class="font-mono text-4xl font-bold mr-4 text-green-500">₱38,000</h4>
                  <p class="font-mono text-sm text-slate-400 py-0.5 leading-4 mr-2">Cost varies with scope & complexity.</p>
                </div>

                <div class="w-full h-0.5 bg-slate-600 rounded mt-3"></div>
                <ul class="list-image-checkmark font-mono text-sm text-slate-50 px-3.5 mt-6">
                  <li>Dynamic Content</li>
                  <li class="mt-2">Admin Panel</li>
                  <li class="mt-2">5 Page Website</li>
                  <li class="mt-2">Custom Design</li>
                  <li class="mt-2">6 Months Support</li>
                </ul>
                <span class="font-mono text-xs text-slate-400 mt-4">Optional Addons:</span>
                <div class="mt-1 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Fully Managed</label
                  >
                </div>
                <div class="mt-2 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Host it for me.</label
                  >
                </div>
                <div class="mt-2 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Extended Support <span class="text-xs text-green-400">(12 months)</span></label
                  >
                </div>
                <button class="w-full h-fit py-3 rounded-3xl bg-green-400 text-slate-40 font-mono mt-10 mb-2">PICK THIS PACKAGE</button>
              </div>
              <div class="flex flex-col w-96 h-fit mt-8 mr-8 ring-1 ring-green-500 rounded-3xl p-5">
                <div class="flex flex-row">
                  <h6 class="font-mono text-lg text-slate-50 w-full">WEB APP</h6>
                  <p class="font-mono leading-tight text-sm py-2 w-full bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Basic to Brilliant</p>
                </div>
                <p class="font-mono text-slate-50 mt-8">Starts at</p>
                <div class="flex">
                  <h4 class="font-mono text-4xl font-bold mr-4 text-green-500">₱38,000</h4>
                  <p class="font-mono text-sm text-slate-400 py-0.5 leading-4 mr-2">Cost varies with scope & complexity.</p>
                </div>

                <div class="w-full h-0.5 bg-slate-600 rounded mt-3"></div>
                <ul class="list-image-checkmark font-mono text-sm text-slate-50 px-3.5 mt-6">
                  <li>Dynamic Content</li>
                  <li class="mt-2">Admin Panel</li>
                  <li class="mt-2">5 Page Website</li>
                  <li class="mt-2">Custom Design</li>
                  <li class="mt-2">6 Months Support</li>
                </ul>
                <span class="font-mono text-xs text-slate-400 mt-4">Optional Addons:</span>
                <div class="mt-1 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Fully Managed</label
                  >
                </div>
                <div class="mt-2 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Host it for me.</label
                  >
                </div>
                <div class="mt-2 flex">
                  <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
                    >Extended Support <span class="text-xs text-green-400">(12 months)</span></label
                  >
                </div>
                <button class="w-full h-fit py-3 rounded-3xl bg-green-400 text-slate-40 font-mono mt-10 mb-2">PICK THIS PACKAGE</button>
              </div>
            </div>
          </div>
        </Transition>

        <div class="absolute w-96 rounded-full bg-slate-600 bottom-12 left-36">
          <div v-show="section === 1" class="h-1 rounded-full bg-green-500" style="width: 14.2857142857%"></div>
          <div v-show="section === 2" class="h-1 rounded-full bg-green-500" style="width: 28.5714285714%"></div>
          <div v-show="section === 3" class="h-1 rounded-full bg-green-500" style="width: 42.8571428571%"></div>
          <div v-show="section === 4" class="h-1 rounded-full bg-green-500" style="width: 57.1428571429%"></div>
          <div v-show="section === 5" class="h-1 rounded-full bg-green-500" style="width: 71.4285714286%"></div>
          <div v-show="section === 6" class="h-1 rounded-full bg-green-500" style="width: 85.7142857143%"></div>
          <div v-show="section === 7" class="h-1 rounded-full bg-green-500" style="width: 100%"></div>
        </div>

        <div class="absolute w-fit h-fit p-6 rounded-full top-32 -right-24 bg-slate-950/50 shadow-2xl">
          <div class="flex flex-col justify-center items-center">
            <button @click="section = 1" class="mb-7 tooltip" :class="{ 'text-green-500': section === 1, 'text-slate-500': section !== 1 }">
              <Home :size="26" :stroke-width="1" />
            </button>
            <button @click="section = 2" class="mb-7" :class="{ 'text-green-500': section === 2, 'text-slate-500': section !== 2 }">
              <Computer :size="26" :stroke-width="1" />
            </button>
            <button @click="section = 3" class="mb-7" :class="{ 'text-green-500': section === 3, 'text-slate-500': section !== 3 }">
              <Rocket :size="26" :stroke-width="1" />
            </button>
            <button @click="section = 4" class="mb-7" :class="{ 'text-green-500': section === 4, 'text-slate-500': section !== 4 }">
              <GalleryVertical :size="26" :stroke-width="1" />
            </button>
            <button @click="section = 5" class="mb-7" :class="{ 'text-green-500': section === 5, 'text-slate-500': section !== 5 }">
              <Building :size="26" :stroke-width="1" />
            </button>
            <button @click="section = 6" class="mb-7" :class="{ 'text-green-500': section === 6, 'text-slate-500': section !== 6 }">
              <DollarSign :size="26" :stroke-width="1" />
            </button>
            <button @click="section = 7" class="" :class="{ 'text-green-500': section === 7, 'text-slate-500': section !== 7 }">
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
  transition-delay: 2s;
  transform: translateX(500px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-to {
  transform: translateX(-500px);
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
