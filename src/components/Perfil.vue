<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "Perfil",
  props: {
    perfil: {
      type: Object,
      required: true,
    },
  },
  
});

</script>

<template>
  <!-- Div-borda -->
   <div 
   class="border-indigo-600
    max-sm:border max-sm:mx-4 max-sm:p-4
    sm:border sm:rounded-xl sm:p-4
    md:border md:rounded-xl md:p-6 
   "
   >
   <!-- HeaderPerfil -->
    <div class="
      max-sm:flex max-sm:flex-col max-sm:items-center
      sm:flex sm:items-center
      md:flex flex-col md:items-center
    ">
      <img :src="`${perfil.avatar_url}`" alt="userImg" class="w-24 h-24 rounded-full">
      <div class="
        max-sm:flex max-sm:flex-col max-sm:items-center 
        sm:flex sm:flex-col sm:items-center
        md:flex md:flex-col md:items-center
      ">
        <p class="text-2xl">{{ perfil.name }}</p>
        <button 
        class="bg-indigo-600 hover:bg-indigo-800 rounded-full duration-300 
        max-sm:w-28 max-sm:my-4
        sm:w-20 sm:h-10 sm:my-4
        md:w-44 md:h-10 md:my-4
        ">
          <a :href="`${perfil.html_url}`" target="_blank">See More</a>
        </button>
      </div>
      <div class="
        max-sm:flex max-sm:mb-4
        sm:flex sm:mb-4
        md:flex md:mb-4
      ">
        <span class="flex items-baseline">
          <font-awesome-icon icon="fa-solid fa-user" class="mr-2" />
          <p class="text-md mr-2">{{ perfil.login }}</p>
        </span>
        <span class="flex items-baseline" v-if="perfil.location" >
          <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />
          <p class="text-md">{{ perfil.location }}</p>
        </span>
      </div>
      <div class="w-9/12">
        <p class="text-lg 
          max-sm:text-center max-sm:mb-2
          sm:text-center sm:mb-4
          md:text-center md:mb-4
        ">{{ perfil.bio }}</p>
      </div>
      <div class="flex w-full justify-center ">
        <span class="flex flex-col items-center mx-2">
          <p class="text-xl">Repositories</p>
          <p class="text-lg">{{ perfil.public_repos }}</p>
        </span>
        <span class="flex flex-col items-center mx-2">
          <p class="text-xl">Followers</p>
          <p class="text-lg">{{ perfil.followers }}</p>
        </span>
        <span class="flex flex-col items-center mx-2">
          <p class="text-xl">Following</p>
          <p class="text-lg">{{ perfil.following }}</p>
        </span>
      </div>
    </div>
   </div>
</template>

<style scoped></style>
