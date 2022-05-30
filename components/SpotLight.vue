<template>
  <div class="opacity-75 transition-opacity glow">
    <div
      class="fixed z-10 left-0 right-0 spotlight text-white transition-colors duration-300 ease-in-out"
    >
      fefe
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SpotLight',
})
</script>

<style scoped>
.spotlight {
  filter: blur(20vh);
  background: linear-gradient(45deg, #00dc82, #36e4da 50%, #0047e1);
  height: 50vh;
  animation: glow infinite alternate ease-in-out;
  animation-duration: 4s;
}

@keyframes glow {
  0% {
    filter: blur(20vh);
    bottom: -40vh;
  }
  50% {
    filter: blur(15vh);
    bottom: -30vh;
  }
  100% {
    filter: blur(20vh);
    bottom: -40vh;
  }
}
</style>
