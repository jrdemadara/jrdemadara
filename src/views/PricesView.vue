<script setup lang="ts">
import { Construction, DollarSign } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
      <DollarSign :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
      <p class="select-none font-mono text-sm text-slate-50">PRICES</p>
    </div>
    <h2 class="select-none font-mono mt-12 text-4xl text-slate-50">Price <span class="text-green-500">Range</span></h2>
    <div class="flex flex-col w-full h-full justify-center items-center">
      <Construction :size="58" :stroke-width="2" class="text-orange-400 mr-2" />
      <h2 class="font-mono text-4xl text-orange-400">Under Construction</h2>
      <!-- <div class="flex flex-col w-80 h-fit mt-8 mr-8 ring-1 ring-green-500 rounded-3xl p-5">
        <div class="flex flex-row">
          <h6 class="font-mono text-lg text-slate-50 w-52">WEB APP</h6>
          <p class="font-mono leading-tight text-sm text-right py-2 w-full bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Basic to Brilliant</p>
        </div>
        <p class="font-mono text-slate-50 mt-4">Starts at</p>
        <div class="flex flex-col">
          <h4 class="font-mono text-4xl font-bold mr-4 text-green-500">₱38,000</h4>
          <p class="font-mono text-sm text-slate-400 py-0.5 leading-4 mr-2">Cost varies with scope & complexity.</p>
        </div>

        <div class="w-full h-0.5 bg-slate-600 rounded mt-3"></div>
        <ul class="list-image-checkmark font-mono text-sm text-slate-50 px-3.5 mt-6">
          <li>Dynamic Content</li>
          <li class="mt-2">Admin Panel</li>
          <li class="mt-2">5 Page Website</li>
          <li class="mt-2">Standard Security Measures</li>
          <li class="mt-2">Custom Design</li>
          <li class="mt-2">6 Months Support<span class="text-xs text-green-400">(Minor Updates, Bug Fix)</span></li>
        </ul>
        <span class="font-mono text-xs text-slate-400 mt-4">Optional Addons:</span>
        <div class="mt-1 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Fully Managed</label
          >
        </div>
        <div class="mt-2 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Host it online</label
          >
        </div>
        <div class="mt-2 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Extended Support <span class="text-xs text-green-400">(12 months)</span></label
          >
        </div>
        <button class="w-full h-fit py-3 rounded-3xl bg-green-400 text-slate-40 font-mono mt-10 mb-2">CONTACT US</button>
      </div>
      <div class="flex flex-col w-80 h-fit mt-8 mr-8 ring-1 ring-green-500 rounded-3xl p-5">
        <div class="flex flex-row">
          <h6 class="font-mono text-lg text-slate-50 w-52">DESKTOP APP</h6>
          <p class="font-mono leading-tight text-sm text-right py-2 w-full bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Empower Your Business</p>
        </div>
        <p class="font-mono text-slate-50 mt-4">Starts at</p>
        <div class="flex flex-col">
          <h4 class="font-mono text-4xl font-bold mr-4 text-green-500">₱27,000</h4>
          <p class="font-mono text-sm text-slate-400 py-0.5 leading-4 mr-2">Cost varies with scope & complexity.</p>
        </div>

        <div class="w-full h-0.5 bg-slate-600 rounded mt-3"></div>
        <ul class="list-image-checkmark font-mono text-sm text-slate-50 px-3.5 mt-6">
          <li>OS Compatible <span class="text-xs text-green-400">(Windows, Macintosh, Linux)</span></li>
          <li class="mt-2">Up to 5 essential functionalities</li>
          <li class="mt-2">Up to 3 users</li>
          <li class="mt-2">Standard Security Measures</li>
          <li class="mt-2">Modern UI <span class="text-xs text-green-400">(Material Look & Feel)</span></li>
          <li class="mt-2">Custom Design</li>
          <li class="mt-2">6 Months Support<span class="text-xs text-green-400">(Minor Updates, Bug Fix)</span></li>
        </ul>
        <span class="font-mono text-xs text-slate-400 mt-4">Optional Addons:</span>
        <div class="mt-1 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Online Database</label
          >
        </div>
        <div class="mt-2 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Extended Support <span class="text-xs text-green-400">(12 months)</span></label
          >
        </div>
        <button class="w-full h-fit py-3 rounded-3xl bg-green-400 text-slate-40 font-mono mt-10 mb-2">CONTACT US</button>
      </div>
      <div class="flex flex-col w-80 h-fit mt-8 mr-8 ring-1 ring-green-500 rounded-3xl p-5">
        <div class="flex flex-row">
          <h6 class="font-mono text-lg text-slate-50 w-full">MOBILE APP</h6>
          <p class="font-mono leading-tight text-sm text-end py-2 w-full bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">Go Packet Size</p>
        </div>
        <p class="font-mono text-slate-50 mt-4">Starts at</p>
        <div class="flex flex-col">
          <h4 class="font-mono text-4xl font-bold mr-4 text-green-500">₱42,000</h4>
          <p class="font-mono text-sm text-slate-400 py-0.5 leading-4 mr-2">Cost varies with scope & complexity.</p>
        </div>

        <div class="w-full h-0.5 bg-slate-600 rounded mt-3"></div>
        <ul class="list-image-checkmark font-mono text-sm text-slate-50 px-3.5 mt-6">
          <li>Backend API & Database Integrated</li>
          <li class="mt-2">Phone & Tablet Compatibility</li>
          <li class="mt-2">Up to 5 android users</li>
          <li class="mt-2">Small to Medium Size Business</li>
          <li class="mt-2">Custom Design</li>
          <li class="mt-2">6 Months Support<span class="text-xs text-green-400">(Minor Updates, Bug Fix)</span></li>
        </ul>
        <span class="font-mono text-xs text-slate-400 mt-4">Optional Addons:</span>
        <div class="mt-1 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Deploy on Google Playstore</label
          >
        </div>
        <div class="mt-2 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Host the Database & API</label
          >
        </div>
        <div class="mt-2 flex">
          <input class="font-mono text-slate-50 mr-2" type="checkbox" name="manage" id="manage" value="Fully Managed" /><label class="font-mono text-sm text-slate-50" for="manage"
            >Extended Support <span class="text-xs text-green-400">(12 months)</span></label
          >
        </div>
        <button class="w-full h-fit py-3 rounded-3xl bg-green-400 text-slate-40 font-mono mt-10 mb-2">CONTACT US</button>
      </div> -->
    </div>
  </div>
</template>
