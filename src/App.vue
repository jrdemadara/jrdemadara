<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Home, Rocket, GalleryVertical, Computer, DollarSign, Phone } from 'lucide-vue-next'

const route = useRoute()
</script>

<template>
  <div class="flex flex-col w-screen h-screen px-32 overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900">
    <div class="flex h-fit justify-between items-center py-4">
      <div class="flex items-center w-40">
        <h6 class="font-mono font-bold text-xl text-slate-50">Johnny <span class="font-normal">Roger</span></h6>
      </div>
      <div class="flex flex-grow justify-end items-center w-40">
        <p class="font-mono text-lg text-slate-50">+639972430944 / jrdemadara@protonmail.com</p>
      </div>
    </div>
    <div class="relative flex flex-row w-full h-full mt-10">
      <div class="flex flex-col justify-between w-40">
        <div class="flex">
          <h2 class="select-none font-mono font-normal text-6xl text-green-50">
            {{
              route.name === 'home'
                ? '01'
                : route.name === 'services'
                  ? '02'
                  : route.name === 'skills'
                    ? '03'
                    : route.name === 'projects'
                      ? '04'
                      : route.name === 'prices'
                        ? '05'
                        : route.name === 'contact'
                          ? '06'
                          : '00'
            }}
          </h2>
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

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component" />
        </transition>
      </router-view>

      <div class="absolute w-96 rounded-full bg-slate-600 bottom-12 left-36">
        <div
          :class="[
            'h-1 rounded-full bg-green-500 transition-width duration-500 ease-in-out',
            { 'w-[16.67%]': route.name === 'home' },
            { 'w-[33.34%]': route.name === 'services' },
            { 'w-[50.01%]': route.name === 'skills' },
            { 'w-[66.68%]': route.name === 'projects' },
            { 'w-[83.35%]': route.name === 'prices' },
            { 'w-[100%]': route.name === 'contact' }
          ]"
        />
      </div>

      <nav class="absolute w-fit h-fit p-6 rounded-full top-32 -right-24 bg-slate-950/50 shadow-2xl">
        <div class="flex flex-col justify-center items-center">
          <router-link to="/">
            <button class="mb-7" :class="{ 'text-green-500': route.name == 'home', 'text-slate-500': route.name != 'home' }">
              <Home :size="26" :stroke-width="1" /></button
          ></router-link>
          <router-link to="/services">
            <button class="mb-7" :class="{ 'text-green-500': route.name == 'services', 'text-slate-500': route.name != 'services' }">
              <Computer :size="26" :stroke-width="1" /></button
          ></router-link>
          <router-link to="/skills">
            <button class="mb-7" :class="{ 'text-green-500': route.name == 'skills', 'text-slate-500': route.name != 'skills' }">
              <Rocket :size="26" :stroke-width="1" /></button
          ></router-link>
          <router-link to="/projects">
            <button class="mb-7" :class="{ 'text-green-500': route.name == 'projects', 'text-slate-500': route.name != 'projects' }">
              <GalleryVertical :size="26" :stroke-width="1" /></button
          ></router-link>
          <router-link to="/prices">
            <button class="mb-7" :class="{ 'text-green-500': route.name == 'prices', 'text-slate-500': route.name != 'prices' }">
              <DollarSign :size="26" :stroke-width="1" /></button
          ></router-link>
          <router-link to="/contact">
            <button :class="{ 'text-green-500': route.name == 'contact', 'text-slate-500': route.name != 'contact' }">
              <Phone :size="26" :stroke-width="1" /></button
          ></router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
/* Initial state for entering elements */
.fade-enter-from {
  opacity: 0;
}

/* Final state for entering elements */
.fade-enter-to {
  opacity: 1;
}

/* Initial state for leaving elements */
.fade-leave-to {
  opacity: 0;
}

/* Active state for entering and leaving */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
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

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(300px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.3s ease-out;
}

.transition-width {
  transition: width 0.5s ease-in-out;
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
geoapp mobile
geoapp webapp
ptm appointment
ptm transpo
ptm health mission reg webapp

stl
ndcot admin
ndcot student
ndparang admin
ndparang student
rtu api
lawyers api
azitsorog barangay id reg
azitsorog official website
azitsorog idnow updater
sk website
ndcot alumni tracking

-ON-PROGRESS-
rarenet
face recog attendance

-UPCOMING-


-->
