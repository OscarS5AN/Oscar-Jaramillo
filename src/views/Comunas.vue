<template>
  <div class="container">
    <h1>Listado de Comunas</h1>
    <router-link :to="{name: 'NewComuna'}" class="btn btn-success mb-3">
      <font-awesome-icon icon="plus" /> Agregar
    </router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Municipio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comuna, index) in comunas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ comuna.comu_codi }}</td>
          <td>{{ comuna.comu_nomb }}</td>
          <td>{{ comuna.muni_nomb }}</td>
          <td>
            <router-link 
              :to="{name: 'EditarComuna', params: {id: comuna.comu_codi}}" 
              class="btn btn-warning btn-sm mx-1">
              <font-awesome-icon icon="edit" />
            </router-link>
            <button 
              @click="eliminarComuna(comuna.comu_codi)" 
              class="btn btn-danger btn-sm mx-1">
              <font-awesome-icon icon="trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Comunas',
  data() {
    return {
      comunas: []
    }
  },
  methods: {
    async eliminarComuna(id) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(`http://127.0.0.1:8000/api/comunas/${id}`)
          if (res.data.success) {
            this.comunas = res.data.comunas
            Swal.fire(
              'Eliminado!',
              'La comuna ha sido eliminada.',
              'success'
            )
          }
        }
      })
    }
  },
  async mounted() {
    const res = await axios.get('http://127.0.0.1:8000/api/comunas')
    this.comunas = res.data.comunas
  }
}
</script>