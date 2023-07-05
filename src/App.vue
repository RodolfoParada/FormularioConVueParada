<template>
  <div id="app">
    
   <formulario-web @datos-enviados="agregarDatos"/>
  <MensajeTable :datos="datos"/>
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue'
import MensajeTable from './components/MensajeTable.vue';


export default {
  name: 'App',
  components: {
    FormularioWeb,
    MensajeTable
  },
  data() {
    return {
      datos: [],
    };
  },
  methods: {
    agregarDatos(datos) {
      this.datos.push(datos);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
