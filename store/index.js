export const state = () => ({
    email: '',
    name: '',
    isLoggedIn: false,
    isLoading: false,
    selectedMovie: {},
})

export const mutations = {
    updateUser(state, user) {
        state.email = user.email
        state.name = user.name
        state.isLoggedIn = true
    },
    logout(state) {
        state.email = ''
        state.name = ''
        state.isLoggedIn = false
    },
    updateSelectedMovie(state, movie) {
        state.selectedMovie = movie
    },
    updateLoading(state, isLoading) {
        state.isLoading = isLoading
    }
}