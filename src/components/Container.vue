<script setup lang="ts">
import { ref } from 'vue'
import Formulario from './Formulario.vue';

const count = ref(0)
</script>

<template>
  <div class="flex flex-col p-8 h-auto w-2/3">
    <h1 class="text-2xl ml-8 mb-2">GitHub Search</h1>
    <Formulario />
  </div>
</template>

<style scoped>

</style>
