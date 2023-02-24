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
    class="flex justify-around items-center border border-solid border-indigo-500 rounded-full mb-6 p-6

  ">
    <input type="text" placeholder="Digite o nome do usuário" v-model="userName" 
    class="w-5/6 h-10 px-6 py-6 rounded-full text-white bg-slate-600 outline-indigo-600">
    <button type="submit" class="bg-indigo-400 hover:bg-indigo-700 duration-300 w-12 h-12 text-lg rounded-full"> 
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="" />
    </button>
  </form>
  <Perfil v-if="profile" :perfil="profile" />
  <NotFound v-if="errorMsg" :msg="errorMsg"/>
</template>


<style scoped>

</style>
