const state = {
    option: '',
    modoSupermercado: false,
    modoLista: true
}

const mutations = {
    setOption(state, payload) {
        if (payload === 'supermercado') {
            state.modoSupermercado = true;
            state.modoLista = false;
        } else if (payload === 'lista') {
            state.modoSupermercado = false;
            state.modoLista = true
        }
    }
}

const actions = {
    getOption({ commit }, modo) {
        commit('setOption', modo)
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}