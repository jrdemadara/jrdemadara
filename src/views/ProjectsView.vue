<script setup lang="ts">
import { GalleryVertical } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-center items-center rounded-full w-fit h-fit px-4 py-2 ring-1 ring-slate-50">
      <GalleryVertical :size="16" :stroke-width="2" class="text-slate-50 mr-2" />
      <p class="select-none font-mono text-sm text-slate-50">PROJECTS</p>
    </div>
    <h2 class="select-none font-mono mt-12 text-4xl text-slate-50">Featured <span class="text-green-500">Projects</span> <small class="text-base">(only active projects)</small></h2>
    <div class="grid grid-cols-5 gap-10 mt-8">
      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/sk.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://sultankudaratprovince.gov.ph/" target="_blank" class="font-mono text-green-500 underline text-center">Sultan Kudarat Provincial Goverment Official Website</a>
      </div>

      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/transpo.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://transpo.ptmkapamilya.org" target="_blank" class="font-mono text-green-500 underline">PTM Transportation</a>
      </div>
      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/appointment.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://appointment.ptmkapamilya.org" target="_blank" class="font-mono text-green-500 underline">PTM Appointment</a>
      </div>
      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/request-transpo.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://request.ptmkapamilya.org" target="_blank" class="font-mono text-green-500 underline">PTM Transportation Request</a>
      </div>

      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/azitsorog.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://azitsoroginc.com" target="_blank" class="font-mono text-green-500 underline">Azitsorog Landing Page</a>
      </div>

      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/barangay.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://register.azitsoroginc.com" target="_blank" class="font-mono text-green-500 underline text-center">Philippines Punong Barangay ID Card Registration</a>
      </div>

      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/cotabato.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://ndcotabato.info/" target="_blank" class="font-mono text-green-500 underline text-center">Notre Dame of Cotabato Official Website</a>
      </div>

      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/parang.png" alt="" srcset="" class="object-cover w-60 h-36 rounded-xl" />
        <a href="https://ndparang.info/" target="_blank" class="font-mono text-green-500 underline text-center">Notre Dame of Parang Official Website</a>
      </div>

      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/stl.png" alt="" srcset="" class="w-32 h-60 rounded-xl" />
        <a href="#" class="font-mono text-green-500 underline text-center">Small Town Lottery Mobile App & API</a>
      </div>

      <div class="flex flex-col justify-center items-center space-y-2">
        <img src="@/assets/image/projects/geoapp.jpg" alt="" srcset="" class="w-32 h-60 rounded-xl" />
        <a href="#" class="font-mono text-green-500 underline text-center">Sultan Kudarat Province GeoApp Mobile App & API</a>
      </div>
    </div>
  </div>
</template>
