import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        titulo: 'Listado de cordenadas buscadas',
        center: [51.505, -0.159],
        cordenadasBuscadas: [],
        longitud: null,
        latitud: null,
    },
    getters: {

    },
    mutations: {
        addLocalizacion(state) {
            state.center = []
            state.center[0] = Number(state.latitud);
            state.center[1] = Number(state.longitud);
            let usuario = new Object()
            usuario.latitud = state.latitud;
            usuario.longitud = state.longitud;
            state.cordenadasBuscadas.push(usuario);

        }
    },
    actions: {
        agregarLocalizacion(context) {
            context.commit('addLocalizacion');
        }
    },
    modules: {}
})