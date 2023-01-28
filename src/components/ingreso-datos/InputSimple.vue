<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-form class="q-pa-sm flex flex-center column" @submit="procesarSimple">
      <q-input
        class="q-ma-sm text-subtitle1"
        standout="bg-purple-6 text-white"
        placeholder="Nombre producto"
        v-model.trim="datos.nombre"
      />
      <q-btn
        class="q-ma-sm text-subtitle1 text-weight-medium"
        color="yellow-9"
        icon="check"
        label="Agregar"
        type="submit"
        :disabled="bloquearSimple"
      />
    </q-form>
  </transition>
</template>

<script>
export default {
  props: {
    datos: Object,
    bloquearSimple: Boolean,
    procesarSimple: Function,
  },
};
</script>

<style></style>
