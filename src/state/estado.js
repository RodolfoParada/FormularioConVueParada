import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        formulario: {
            nombre: "",
            apellido: "",
            correo: "",
            clave: "",
            curso: [],
            error: false,
        },
    },

    mutations: {
        actualizarCampo(state, payload) {
            state.

            formulario[payload.campo] = payload.valor;
        },
    },
});



export default store;