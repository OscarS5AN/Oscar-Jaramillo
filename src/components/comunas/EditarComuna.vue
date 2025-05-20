<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2>Editar Comuna</h2>
        <form @submit.prevent="updateComuna">
          <div class="mb-3">
            <label for="comu_nomb" class="form-label">Nombre:</label>
            <input 
              type="text" 
              class="form-control" 
              id="comu_nomb" 
              v-model="comuna.comu_nomb" 
              required>
          </div>
          <div class="mb-3">
            <label for="muni_codi" class="form-label">Municipio:</label>
            <select class="form-select" v-model="comuna.muni_codi" required>
              <option 
                v-for="municipio in municipios" 
                :key="municipio.muni_codi" 
                :value="municipio.muni_codi">
                {{ municipio.muni_nomb }}
              </option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Actualizar</button>
          <button @click="cancelar" class="btn btn-secondary ms-2">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'EditarComuna',
  data() {
    return {
      comuna: {
        comu_codi: 0,
        comu_nomb: '',
        muni_codi: 0
      },
      municipios: []
    }
  },
  methods: {
    cancelar() {
      this.$router.push({ name: 'Comunas' })
    },
    async updateComuna() {
      const res = await axios.put(
        `http://127.0.0.1:8000/api/comunas/${this.comuna.comu_codi}`,
        this.comuna
      )
      if (res.status === 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Comuna actualizada',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push({ name: 'Comunas' })
      }
    }
  },
  async mounted() {
    this.comuna.comu_codi = this.$route.params.id
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comunas/${this.comuna.comu_codi}`
    )
    this.comuna = response.data.comuna
    this.municipios = response.data.municipios
  }
}
</script>