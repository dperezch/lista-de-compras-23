<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-form class="q-pa-sm flex flex-center column" @submit="procesar">
      <q-input
        class="q-ma-sm text-subtitle1"
        standout="bg-purple-6 text-white"
        placeholder="Nombre producto"
        v-model.trim="datos.nombre"
      />

      <q-input
        type="number"
        class="q-ma-sm text-subtitle1"
        standout="bg-purple-6 text-white"
        placeholder="Precio unitario"
        v-model.number="datos.precio"
      />

      <q-input
        type="number"
        class="q-ma-sm text-subtitle1"
        standout="bg-purple-6 text-white"
        placeholder="Cantidad"
        v-model.number="datos.cantidad"
      />

      <q-btn
        class="q-ma-sm text-subtitle1 text-weight-medium"
        color="light-green-14"
        icon="check"
        label="Agregar"
        type="submit"
        :disabled="incorrecto"
      />
    </q-form>
  </transition>
</template>

<script>
export default {
  props: {
    datos: Object,
    incorrecto: Boolean,
    procesar: Function,
  },
};
</script>

<style></style>
