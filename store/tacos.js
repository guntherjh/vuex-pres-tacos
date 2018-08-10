export const state = () => ({
    loading: false,
    tacos: []
})

export const getters = {
    tacos: state => state.tacos,
    recentTaco: state => state.tacos[state.tacos.length - 1]
}

export const mutations = {
    addTaco (state, taco) {
      state.tacos.push(taco)
    },
    remove (state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggleLoading (state, isLoading) {
        state.loading = isLoading;
    }
}

export const actions = {
    fetchTaco ({ commit }) {
        commit('toggleLoading', true);

        fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
            .then(response => response.json())
            .then(json => {
                const taco = json;
                setTimeout(() => {
                    commit('addTaco', taco)
                    commit('toggleLoading', false);
                }, 5000);
            })
    }
}

