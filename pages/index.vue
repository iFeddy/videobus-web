<template>
  <div
    class="flex h-screen w-full flex-col items-center bg-gray-900 px-4 align-middle text-white md:justify-center"
  >
    <div class="h-64 w-64 p-2">
      <Logo />
    </div>

    <transition name="fade">
      <LoginForm v-if="!isLoggedIn" />
    </transition>

    <SpotLight />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    userName() {
      return this.$store.state.name
    },
    userEmail() {
      return this.$store.state.email
    },
  },
  watch: {
    isLoggedIn(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.$router.push('/movies')
        }, 600)
      }
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/movies')
    }
  },
})
</script>
