<template>
  <div class="min-h-screen w-full bg-gray-900 text-white">
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>

    <transition name="fade">
      <div
        v-if="showInfo"
        class="fixed z-30 flex h-screen w-screen flex-col items-center justify-center bg-black/80 align-middle"
      >
        <div
          class="flex min-h-[30%] w-11/12 items-center justify-center rounded-xl bg-gray-900 align-middle shadow-lg shadow-gray-900/30"
        >
          <svg
            v-if="loadingInfo"
            role="status"
            class="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>

          <div v-else class="flex h-full w-full flex-col p-2">
            <div class="w-full py-4 px-2">
              <div class="flex items-center justify-between">
                <span class="ml-2 text-lg font-semibold">
                  {{ selectedMovie.title }}
                </span>
                <button
                  class="focus:shadow-outline mr-1 flex h-8 w-8 items-center justify-center self-end rounded-full bg-indigo-600 align-middle text-white hover:bg-indigo-700 focus:outline-none"
                  @click="showInfo = false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="w-full p-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="ml-2 text-sm text-gray-200">
                    {{ selectedMovie.year }}
                  </span>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="ml-2 text-sm font-semibold"> 120 min </span>
                </div>

                <div class="flex items-center">
                  <svg
                    class="h-4 w-4 fill-current text-yellow-500 dark:text-yellow-200"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    />
                  </svg>
                  <span class="ml-2 text-sm text-gray-600 dark:text-gray-200">
                    {{ selectedMovie.rating }}
                  </span>
                </div>
              </div>
            </div>

            <div class="w-full py-4 px-2">
              <div class="flex items-center justify-between">
                <img
                  :src="selectedMovie.poster"
                  class="h-40 rounded-md object-cover"
                />

                <div class="h-32 overflow-hidden px-4">
                  <p
                    class="text-ellipsis text-left text-sm tracking-wide text-gray-400"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    aliquam nisi facere animi, laboriosam consequatur
                    perferendis! Exercitationem impedit mollitia ipsa dicta
                    consectetur eveniet omnis nesciunt corporis suscipit,
                    repudiandae harum reprehenderit.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full py-4 px-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span class="ml-2 text-sm text-gray-200">
                    {{ selectedMovie.director }}
                  </span>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span class="ml-2 text-sm text-gray-200">
                    {{ selectedMovie.genre }}
                  </span>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                  <span class="ml-2 text-sm text-gray-200">
                    {{ selectedMovie.language }}
                  </span>
                </div>
              </div>
            </div>

            <div class="flex w-full flex-row-reverse py-4 px-2">
              <button
                class="flex space-x-2 self-end rounded-full bg-indigo-600 py-2 px-4 font-bold text-white hover:bg-indigo-700"
                @click="watchMovie"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mirar Película</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="mx-auto h-32 w-32 p-2">
      <Logo />
    </div>

    <div class="relative z-20 mx-auto">
      <NavBar />

      <SearchBar />

      <div class="px-4 py-10">
        <carousel
          :loop="true"
          :autoplay="true"
          :per-page-custom="[
            [768, 3],
            [1024, 4],
            [1280, 5],
            [1600, 6],
          ]"
          :navigation-enabled="false"
          :pagination-enabled="false"
        >
          <slide v-for="movie in movies" :key="movie.id">
            <a
              class="flex flex-col items-center justify-center px-2 align-middle"
              @click="getMovie(movie.id)"
            >
              <img
                class="h-64 rounded-md object-cover shadow-md md:h-96"
                :src="movie.poster"
              />
              <span
                >{{ movie.title }} - {{ movie.year }} - {{ movie.rating }}</span
              >
            </a>
          </slide>
        </carousel>
      </div>

      <div class="px-4 py-10">
        <carousel
          :loop="true"
          :autoplay="true"
          :per-page-custom="[
            [768, 3],
            [1024, 4],
            [1280, 5],
            [1600, 6],
          ]"
          :navigation-enabled="false"
          :pagination-enabled="false"
        >
          <slide v-for="movie in movies" :key="movie.id">
            <a
              class="flex flex-col items-center justify-center px-2 align-middle"
              @click="getMovie(movie.id)"
            >
              <img
                class="h-64 rounded-md object-cover shadow-md md:h-96"
                :src="movie.poster"
              />
              <span
                >{{ movie.title }} - {{ movie.year }} - {{ movie.rating }}</span
              >
            </a>
          </slide>
        </carousel>
      </div>
    </div>

    <SpotLight />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Movie from '~/models/Movie'

export default Vue.extend({
  name: 'MoviesPage',
  data() {
    return {
      search: '',
      searchResults: [],
      showInfo: false,
      loadingInfo: true,
      movies: [
        {
          id: 1,
          title: 'The Shawshank Redemption',
          year: 1994,
          rating: 9.3,
          poster:
            'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        },
        {
          id: 2,
          title: 'The Godfather',
          year: 1972,
          rating: 9.2,
          poster:
            'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          id: 3,
          title: 'The Godfather: Part II',
          year: 1974,
          rating: 9.0,
          poster:
            'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          id: 4,
          title: 'The Dark Knight',
          year: 2008,
          rating: 9.0,
          poster:
            'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
        },
        {
          id: 5,
          title: 'Schindler',
          year: 1993,
          rating: 8.9,
          poster:
            'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        },
        {
          id: 6,
          title: 'Pulp Fiction',
          year: 1994,
          rating: 8.9,
          poster:
            'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          id: 7,
          title: 'The Good, the Bad and the Ugly',
          year: 1966,
          rating: 8.9,
          poster:
            'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg',
        },
        {
          id: 8,
          title: 'Fight Club',
          year: 1999,
          rating: 8.8,
          poster:
            'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          id: 9,
          title: 'The Lord of the Rings: The Return of the King',
          year: 2003,
          rating: 8.8,
          poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
      ] as Movie[],
      selectedMovie: {} as Movie,
      option: {
        url: 'https://artplayer.org/assets/sample/video.mp4',
        autoSize: true,
      },
      style: {
        width: '600px',
        height: '400px',
        margin: '60px auto 0',
      },
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    isLoading() {
      return this.$store.state.isLoading
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      // this.$router.push('/')
    }
    setTimeout(() => {
      this.$store.commit('updateLoading', false)
    }, 1000)
  },
  methods: {
    getMovie(id: number) {
      this.loadingInfo = true
      this.showInfo = true
      setTimeout(() => {
        const movie = this.movies.find((movie) => movie.id === id)
        if (movie) {
          this.selectedMovie = movie
          this.$store.commit('updateSelectedMovie', this.selectedMovie)
        } else {
          // tirar un error
        }

        this.loadingInfo = false
      }, 2000)
    },
    watchMovie() {
      this.$router.push('/watch')
    },
  },
})
</script>
