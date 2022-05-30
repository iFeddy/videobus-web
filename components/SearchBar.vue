<template>
  <div class="flex flex-col items-center justify-center py-10">
    <input
      id="search"
      v-model="search"
      class="w-3/4 rounded-3xl border border-gray-600 bg-transparent py-2 px-4 font-semibold text-gray-600"
      placeholder="Buscar Películas..."
      type="text"
      name="search"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SearchBar',
  data() {
    return {
      search: '',
    }
  },
})
</script>
