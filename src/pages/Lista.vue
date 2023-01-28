<template>
  <q-page 
    v-touch-pan.horizontal.prevent.touch="swipe"
    padding
  >
    
    <ListaSimple 
      v-if="modoLista"
      :productos="productos"
    />
    <div class="absolute full-width full-height column">
      <SinDatos 
      v-if="!productos.length"
      class="self-center full-width q-mt-md"
    />

      <Total 
        v-if="productos.length && modoSupermercado"
      />

      <q-scroll-area class="q-scroll-area-card">
        <Card 
          :productos="productos"
          v-if="modoSupermercado"
        />
      </q-scroll-area>
      
      

      <div
        v-if="productos.length"
      >
        <Boton 
          v-if="modoLista"
        />
        <BotonDos 
          v-if="modoSupermercado"
        />
      </div> 
    </div>
    
    
  </q-page>
</template>

<script>
import Card from '../components/listas/Card.vue'
import { mapState } from "vuex";
import Total from '../components/listas/Total.vue'
import SinDatos from '../components/listas/SinDatos.vue'
import ListaSimple from '../components/listas/ListaSimple.vue'
import Boton from '../components/listas/Boton.vue'
import BotonDos from '../components/listas/BotonDos.vue'
export default {
  components: {
    Card,
    Total,
    SinDatos,
    ListaSimple,
    Boton,
    BotonDos,
  },
  data(){
    return{
      info: null
    }
  },
  computed: {
    ...mapState('storeList', ['productos']),
    ...mapState('storeMode', ['option', 'modoSupermercado', 'modoLista'])
  },
  methods: {
    swipe({evt, ...info}){
      this.info = info
      if (this.info.direction === 'right') {
        this.$router.push('/')
      } else if (this.info.direction === 'left') {
        this.$router.push('/settings')
      }
    }
  }
  
}
</script>

<style>
.q-scroll-area-card{
  display: flex;
  flex-grow: 1;
}
</style>

