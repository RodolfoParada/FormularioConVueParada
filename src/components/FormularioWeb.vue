<template>
          <form :state="formstate" @submit.prevent="onSubmit">
            <div class="container" >
                <div class="row">
                         <h3>Formulario</h3>
                     <div>
                         <validate tag="label">
                             <div class="input-group mb-3">
                               <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                  </svg></span>   
                                <input type="text" @input="actualizarCampo('nombre', $event.target.value)" class="form-control" maxlength="9" placeholder="Ingrese su nombre" name="nombre" id="nombre" aria-label="nombre" aria-describedby="basic-addon1" v-model="formulario.nombre" required>
                                <span >&nbsp;* </span>
                                
                              </div>
                         </validate>
                     </div>
                     <div>
                         <validate tag="label">
                                <div class="input-group mb-3">
                                  <span class="input-group-text" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                      </svg></span>   
                                  <input type="text" @input="actualizarCampo('apellido', $event.target.value)" class="form-control" maxlength="9" placeholder="Ingrese su apellido" name="apellido" id="apellido" aria-label="apellido" aria-describedby="basic-addon1" v-model="formulario.apellido" required>
                                  <span >&nbsp;* </span>
                                </div>
                            </validate>
                     </div>
                     <div>
                        <validate tag="label">
                                   <div class="input-group mb-3">
                                     <span class="input-group-text" id="basic-addon3">@</span>   
                                     <input type="email" @input="actualizarCampo('email', $event.target.value)" class="form-control"  placeholder="email@email.com" name="correo" id="correo" aria-label="correo" aria-describedby="basic-addon1" v-model="formulario.correo"  required>
                                     <span >&nbsp;*</span>
                                   </div>
                              </validate>
                     </div>
                     <div>
                         <validate tag="label">
                               <div class="input-group mb-3">
                                 <span class="input-group-text" id="basic-addon4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock" viewBox="0 0 16 16">
                                 <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
                                 </svg></span>   
                                 <input type="password" @input="actualizarCampo('password', $event.target.value)" class="form-control" maxlength="9" name="clave" id="clave" placeholder="Ingrese su clave" aria-label="clave" aria-describedby="basic-addon1" v-model="formulario.clave" required>
                                  <span >&nbsp;*</span>
                                </div>
                           </validate>
                     </div>
                </div>
            </div>
             <div class="container">
                    <div class="row">
                        <validate>                    
                               <h4>Selecciona tus curso</h4>
                       <div>
                         <input type="checkbox" @input="actualizarCampo('curso', $event.target.value)" id="checkJS" v-model="formulario.curso" value="javascript"/>
                         <label for="checkJS">&nbsp;JavaScript</label>
                       </div>
                       <div>
                         <input type="checkbox" @input="actualizarCampo('curso', $event.target.value)" id="checkReact" v-model="formulario.curso" value="react" />
                         <label for="checkReact">&nbsp;React</label>
                       </div>
                       <div>
                         <input type="checkbox" @input="actualizarCampo('curso', $event.target.value)" id="checkNg" v-model="formulario.curso" value="angular" />
                         <label for="checkNg">&nbsp;Angular</label>
                       </div>
                       <div>
                         <input type="checkbox" @input="actualizarCampo('curso', $event.target.value)" id="checkVue" v-model="formulario.curso" value="vue" />
                         <label for="checkVue">&nbsp;Vue</label>
                       </div>
                       </validate>
                      </div>
                      <div v-if="Error" class="error-message text-danger mt-1">{{ Error }}</div> 
         
                    </div>
                        <div class="container">
                            <div >
                           <validate>
                               <button type="submit" @click="enviarDatos"  class="btn btn-dark mb-5 mt-2">Enviar</button>
                           </validate>    
                          
                        </div>
                        </div>
             </form>


</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['formulario']),

    nombre: {
      get() {
        return this.formulario.nombre;
      },
      set(valor) {
        this.actualizarCampo({ campo: 'nombre', valor });
      },
    },
    apellido: {
      get() {
        return this.formulario.apellido;
      },
      set(valor) {
        this.actualizarCampo({ campo: 'apellido', valor });
      },
    },
    email: {
      get() {
        return this.formulario.email;
      },
      set(valor) {
        this.actualizarCampo({ campo: 'email', valor });
      },
    },
    password: {
      get() {
        return this.formulario.password;
      },
      set(valor) {
        this.actualizarCampo({ campo: 'password', valor });
      },
    },
  },
  methods: {
    ...mapMutations(['actualizarCampo']),
  },
};


</script>

<style scoped>

button{
  width: 250px;
}
#checkReact{
  margin-left:-34px;
}
#checkNg{
  margin-left: -20px;
}
#checkVue{
  margin-left: -48px;
}
.error-message{
margin-top:-15px ;
}

</style> 

<!-- 
<script>
export default {
  name: 'FormularioWeb',
  methods: {
    onSubmit() {
      this.$store.dispatch("enviarDatos");
    },
    // Resto de los métodos
  },
  computed: {
    formstate() {
      return this.$store.state.formstate;
    },
    nombre: {
      get() {
        return this.$store.state.nombre;
      },
      set(value) {
        this.$store.commit("setNombre", value);
      },
    },
    apellido: {
      get() {
        return this.$store.state.apellido;
      },
      set(value) {
        this.$store.commit("setApellido", value);
      },
    },
    correo: {
      get() {
        return this.$store.state.correo;
      },
      set(value) {
        this.$store.commit("setCorreo", value);
      },
    },
    clave: {
      get() {
        return this.$store.state.clave;
      },
      set(value) {
        this.$store.commit("setClave", value);
      },
    },
    curso: {
      get() {
        return this.$store.state.curso;
      },
      set(value) {
        this.$store.commit("setCurso", value);
      },
    },
    Error() {
      return this.$store.state
    }
  }
  }
</script> -->