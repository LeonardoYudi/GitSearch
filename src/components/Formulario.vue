<script setup lang="ts">
import { ref } from 'vue'
import EventServ from '../services/EventServ.vue';
import NotFound from './NotFound.vue';
import Perfil from './Perfil.vue';


const userName = ref("")
const profile = ref(null)
const errorMsg = ref(null)

const buscarPerfil = () =>{
  EventServ.getProfile(userName.value)
    .then((resp : any)=>{
      profile.value = resp.data
      userName.value = ""
      errorMsg.value = null
    })
    .catch((error: any)=>{
      profile.value = null
      errorMsg.value = error.message
    })
}

</script>

<template>
  <form @submit.prevent="buscarPerfil" 
    class="border-indigo-500 
    max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mb-4
    sm:w-4/6 sm:border sm:rounded-full sm:flex sm:items-baseline sm:justify-between sm:px-8 sm:py-4 sm:my-4 
    md:border md:rounded-full md:w-4/6 md:p-2
    md:flex md:items-baseline md:justify-between md:px-8 md:py-4 md:mb-4 md:mt-4
  ">
    <input type="text" placeholder="Enter the username" v-model="userName" 
    class=" 
    bg-slate-600 outline-none
    max-sm:w-10/12 max-sm:px-2 max-sm:py-4 max-sm:rounded-full max-sm:my-2 max-sm:text-center max-sm:text-lg
    sm:w-5/6 sm:text-xl sm:rounded-full sm:py-4 sm:px-4
    md:w-5/6 md:text-2xl md:rounded-full md:py-4 md:px-4
    ">
    <button type="submit" 
    class="bg-indigo-400 hover:bg-indigo-700 duration-300 w-12 h-12 text-lg rounded-full
    "> 
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="" />
    </button>
  </form>
  <Perfil v-if="profile" :perfil="profile" />
  <NotFound v-if="errorMsg" :msg="errorMsg"/>
</template>


<style scoped>

</style>
