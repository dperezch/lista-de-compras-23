const state = {
    productos: [],
    totales: [],
    total: null
}

const mutations = {

    /* local storage */
    cargarProductos(state, payload) {
        state.productos = payload
    },
    cargarTotales(state, payload) {
        state.totales = payload
    },
    cargarTotal(state, payload) {
        state.total = payload
    },

    /* agregar datos al state */
    setProductos(state, payload) {
        state.productos.push(payload)
        localStorage.setItem('productos', JSON.stringify(state.productos))
    },
    setTotales(state, payload) {
        state.totales.push(payload)
        localStorage.setItem('totales', JSON.stringify(state.totales))
    },
    setTotal(state, payload) {
        const formatter = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        })
        state.total = formatter.format(payload)
        localStorage.setItem('total', JSON.stringify(state.total))
    },

    /* modificar el state */
    setEliminar(state, payload) {
        state.productos.splice(payload, 1)
        localStorage.setItem('productos', JSON.stringify(state.productos))
    },
    setCambiar(state, payload) {
        state.productos.splice(payload.indice, 1, payload)
        localStorage.setItem('productos', JSON.stringify(state.productos))
    },
    /* Eliminar todo */
    delete(state){
        state.productos = []
        state.totales = []
        state.total = null
        localStorage.setItem('productos', JSON.stringify(state.productos))
        localStorage.setItem('totales', JSON.stringify(state.totales))
        localStorage.setItem('total', JSON.stringify(state.total))
    }

}

const actions = {
    /* local storage */
    cargarLocalStorage({ commit }) {
        if (localStorage.getItem('productos') && localStorage.getItem('totales') && localStorage.getItem('total')) {
            const productos = JSON.parse(localStorage.getItem('productos'))
            const totales = JSON.parse(localStorage.getItem('totales'))
            const total = JSON.parse(localStorage.getItem('total'))
            commit('cargarProductos', productos)
            commit('cargarTotales', totales)
            commit('cargarTotal', total)
            return
        }
        localStorage.setItem('productos', JSON.stringify([]))
        localStorage.setItem('totales', JSON.stringify([]))
        localStorage.setItem('total', JSON.stringify(null))

    },
    /* capturar datos para enviarlos a mutations */
    getProductos({ commit }, producto) {
        commit('setProductos', producto)
        commit('setTotales', producto.total)
        const total = state.totales.reduce((a, b) => a + b, 0)
        commit('setTotal', total)
    },
    getIndex({ commit }, indice) {
        commit('setEliminar', indice)
    },
    getTotal({ commit }, total) {
        //total = -total
        commit('setTotales', -total)
        const totalNuevo = state.totales.reduce((a, b) => a + b, 0)
        commit('setTotal', totalNuevo)
    },
    getCambiar({ commit }, datos) {
        commit('setCambiar', datos)
        commit('setTotales', datos.total)
        const total = state.totales.reduce((a, b) => a + b, 0)
        commit('setTotal', total)
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