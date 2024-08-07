<script setup>
import { ref } from 'vue'
import { Monitor, Network, TabletSmartphone, LayoutTemplate } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
      <LayoutTemplate :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
      <p class="select-none font-mono text-sm text-slate-50">SERVICES</p>
    </div>
    <h2 class="select-none font-mono mt-12 text-4xl text-slate-50">My <span class="text-green-400">Specializations</span></h2>
    <div class="grid grid-cols-2 gap-4 mt-8">
      <div class="group/service hover:ring-green-400 flex flex-col justify-center h-fit p-6 rounded-lg ring-1 ring-slate-600">
        <div class="flex justify-between items-center">
          <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">Web App</h4>
          <LayoutTemplate :size="24" class="group-hover/service:text-green-400 text-slate-50" />
        </div>
        <p class="select-none font-mono text-slate-400 leading-tight mt-3">Elevate your business online with my expertise in custom web applications.</p>
        <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">9 PROJECTS</h6>
      </div>

      <div class="group/service hover:ring-green-400 flex flex-col justify-center h-fit p-6 rounded-lg ring-1 ring-slate-600">
        <div class="flex justify-between items-center">
          <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">Mobile App</h4>
          <TabletSmartphone :size="24" class="group-hover/service:text-green-400 text-slate-50" />
        </div>
        <p class="select-none font-mono text-slate-400 leading-tight mt-3">Fuel business growth with my expertise in custom mobile app development.</p>
        <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">3 PROJECTS</h6>
      </div>

      <div class="group/service hover:ring-green-400 flex flex-col justify-center h-fit p-6 rounded-lg ring-1 ring-slate-600">
        <div class="flex justify-between items-center">
          <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">Desktop App</h4>
          <Monitor :size="24" class="group-hover/service:text-green-400 text-slate-50" />
        </div>
        <p class="select-none font-mono text-slate-400 leading-tight mt-3">Elevate you solutions by crafting powerful desktop apps for enhanced user experiences.</p>
        <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">4 PROJECTS</h6>
      </div>

      <div class="group/service hover:ring-green-400 flex flex-col justify-center h-fit p-6 rounded-lg ring-1 ring-slate-600">
        <div class="flex justify-between items-center">
          <h4 class="select-none group-hover/service:text-green-400 font-mono text-2xl text-slate-50">API Development</h4>
          <Network :size="24" class="group-hover/service:text-green-400 text-slate-50" />
        </div>
        <p class="select-none font-mono text-slate-400 leading-tight mt-3">Elevate connectivity with precise API development. Unlock seamless data integration and efficiency.</p>
        <h6 class="select-none font-mono underline w-fit text-slate-50 hover:text-green-400 cursor-default mt-6">5 PROJECTS</h6>
      </div>
    </div>
  </div>
</template>
