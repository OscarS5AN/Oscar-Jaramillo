<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2>Nueva Comuna</h2>
        <form @submit.prevent="saveComuna">
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
          <button type="submit" class="btn btn-primary">Guardar</button>
          <button @click="cancel" class="btn btn-secondary ms-2">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'NewComuna',
  data() {
    return {
      comuna: {
        comu_nomb: '',
        muni_codi: 0
      },
      municipios: []
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'Comunas' })
    },
    async saveComuna() {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/comunas', 
        this.comuna
      )
      if (res.status === 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Comuna creada',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push({ name: 'Comunas' })
      }
    }
  },
  async mounted() {
    const response = await axios.get('http://127.0.0.1:8000/api/municipios')
    this.municipios = response.data.municipios
  }
}
</script>