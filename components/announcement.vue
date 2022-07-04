<template>
<div class="fixed inset-x-0 bottom-0" dir="rtl" >
    <transition name="v-openwindow" >

        <div v-if="show" class="relative px-4 py-3 text-white bg-indigo-600 pr-14">
          <p class="text-sm font-medium text-left sm:text-center">
            {{title}}
      
            <nuxt-link @click.native="close" :to="link" class="underline px-2" > ادامه مطلب &larr; </nuxt-link>
          </p>
      
          <button
            aria-label="Close"
            class="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
            @click="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
    </transition>
</div>
</template>

<script lang="ts" >
import Vue from "vue";

export default Vue.extend({
props : {
    show : {
        type : Boolean,
        default : () => false
    },
    title : {
        type : String,
        default : () => ""
    },
    link : {
        type : String,
        default : () => ""
    }
},
methods: {
    close(){
        this.$emit('update:show' , false)
    }
}
})

</script>