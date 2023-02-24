<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "NotFound",
    props:{
        msg:{
            type:String
        }
    }
})

</script>

<template>
    <div class="w-full flex justify-center">
       <div class="flex flex-col items-center">
            <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="w-16 h-16 mb-2" />
            <h1 class="text-2xl">User Not Found</h1>
            <p class="text-lg">{{ msg }}</p>
       </div>
    </div>
</template>