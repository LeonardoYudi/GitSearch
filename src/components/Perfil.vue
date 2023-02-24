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
  <div class="w-full flex justify-center ">
    <div class="flex flex-col p-8 h-auto w-4/6 border border-solid border-indigo-500 rounded-lg">
      <div class="flex">
        <div class="flex items-center">
          <img :src="`${perfil.avatar_url}`" alt="userImg" class="w-24 h-24 mx-4 rounded-full">
          <div class="ml-4">
            <div class="flex">
              <p class="text-2xl">{{ perfil.name }}</p>
              <button class="bg-indigo-600 hover:bg-indigo-800 px-4 py-2 rounded-full ml-6 duration-300">
                <a :href="`${perfil.html_url}`" target="_blank">See More</a>
              </button>
            </div>
            <div class="flex items-baseline ">
              <span class="flex">
                <font-awesome-icon icon="fa-solid fa-user" class="mr-2" />
                <p class="text-md mr-2">{{ perfil.login }}</p>
              </span>
              <span class="flex">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />
                <p class="text-md">{{ perfil.location }}</p>
              </span>
            </div>
            <div class="py-4">
              <p class="text-lg">{{ perfil.bio }}</p>
            </div>
            <div class="flex w-full ">
              <span class="flex flex-col items-center mr-4">
                <p class="text-lg">Public Repos</p>
                <p class="text-lg">{{ perfil.public_repos }}</p>
              </span>
              <span class="flex flex-col items-center mr-4">
                <p class="text-lg">Followers</p>
                <p class="text-lg">{{ perfil.followers }}</p>
              </span>
              <span class="flex flex-col items-center">
                <p class="text-lg">Following</p>
                <p class="text-lg">{{ perfil.following }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
