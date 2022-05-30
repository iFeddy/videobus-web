<template>
  <div
    class="relative z-20 w-full max-w-md divide-y overflow-hidden rounded-md bg-gray-800 p-8 text-gray-200 shadow-xl"
  >
    <div>
      <h1 class="text-xl font-bold text-gray-200">Ingresá tus datos</h1>
      <hr class="mt-2 border-indigo-500/30" />
      <div class="my-4 flex flex-col space-y-4">
        <input
          v-model="name"
          class="form-input rounded-md border-indigo-500/30 bg-transparent"
          type="text"
          name="name"
          placeholder="Nombre y Apellido"
        />

        <input
          v-model="email"
          class="form-input rounded-md border-indigo-500/30 bg-transparent"
          type="email"
          name="email"
          placeholder="Correo Electronico"
        />

        <button
          class="rounded-md bg-indigo-600 py-4 px-8 text-white shadow-md"
          @click="updateUser"
        >
          Ingresar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoginForm',
  data() {
    return {
      email: '',
      name: '',
    }
  },
  methods: {
    updateUser() {
      this.$store.commit('updateUser', {
        email: this.email,
        name: this.name,
      })
      this.$router.push('/')
    },
  },
})
</script>
