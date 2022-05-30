<template>
  <div class="bg-black/30 px-4 py-2 text-right shadow-inner shadow-black/50">
    <div class="container">
      <span class="px-2"
        >Hola <b>{{ userName }}</b></span
      >
      <button
        class="rounded-full border border-gray-400 bg-transparent py-1 px-4 font-semibold text-gray-400 hover:border-transparent hover:bg-gray-800 hover:text-white"
        @click="logout"
      >
        <span>Salir</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavBar',
  computed: {
    userName() {
      return this.$store.state.name
    },
  },
  methods: {
    logout() {
      this.$store.commit('updateLoading', true)
      setTimeout(() => {
        this.$store.commit('logout')
        this.$router.push('/')
      }, 1000)
    },
  },
})
</script>
