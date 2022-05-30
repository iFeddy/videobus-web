<template>
  <div
    class="flex h-screen w-screen flex-grow items-center justify-center bg-black"
  >
    <vue-plyr>
      <video
        controls
        crossorigin
        playsinline
        :data-poster="selectedMovie.poster"
      >
        <source
          size="720"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
        />
      </video>
    </vue-plyr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'WatchPage',
  computed: {
    id() {
      return this.$route.params.id
    },
    selectedMovie() {
      return this.$store.state.selectedMovie
    },
  },
})
</script>
