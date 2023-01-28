<template>
  <q-footer class="transparent">
    <q-toolbar class="justify-center">
      <q-tabs class="text-cyan-4">
        <q-route-tab
          v-for="ruta in rutas"
          :key="ruta.label"
          :to="ruta.to"
          :icon="ruta.icon"
          :label="ruta.label"
        />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  props: {
    rutas: Array,
  },
};
</script>

<style>
.q-tab--active {
  color: #f7f4f4;
}

@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
