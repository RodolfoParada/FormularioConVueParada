<template>
    <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Correo electronico</th>
          <th scope="col">Cursos</th>
            <th scope="col">Curso</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in datos" :key="index">
              <td>{{ item.nombre }}</td>
              <td>{{ item.apellido }}</td>
              <td>{{ item.correo }}</td>
              <td>{{ item.clave }}</td>
              <td>{{ item.curso }}</td>
            </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
export default {
    props: {
        datos: {
            type: Array,
            required: true,
            default: () => [],
        }
    }
};
</script>