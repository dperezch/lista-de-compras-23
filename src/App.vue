<template>
  <router-view />
</template>
<script>
import { mapActions } from "vuex";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  methods:{
    ...mapActions(['storeList/cargarLocalStorage'])
  },
  created(){
    this["storeList/cargarLocalStorage"]()
  }
})
</script>
