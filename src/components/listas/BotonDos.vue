<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-page-sticky position="bottom-right" :offset="[15, 18]">
      <q-btn fab icon="toc" color="cyan-6" @click="cambiarModo" />
    </q-page-sticky>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      lista: "lista",
    };
  },
  methods: {
    ...mapActions(["storeMode/getOption"]),
    cambiarModo() {
      this["storeMode/getOption"](this.lista);
    },
  },
};
</script>
