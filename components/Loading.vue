<template>
  <div class="fixed top-0 left-0 z-30 h-screen w-screen bg-gray-900">
    <div class="flex h-full w-full flex-col items-center justify-center">
      <div class="h-64 w-64 p-2">
        <Logo />
      </div>
      <span class="text-lg font-semibold">Cargando...</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoadingScreen',
})
</script>
