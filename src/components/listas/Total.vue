<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-toolbar class="transparent text-lime-12 text-center">
      <q-avatar
        size="50px"
        font-size="35px"
        text-color="lime-12"
        icon="shopping_cart"
        class="totales"
      />
      <q-toolbar-title class="text-h5 text-weight-bolder totales">
        Total: {{ total }}
      </q-toolbar-title>

      <q-btn color="red" icon="delete_forever" @click="borrar" />
    </q-toolbar>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("storeList", ["delete"]),
    borrar() {
      this.$q
        .dialog({
          title: "Borrar lista",
          message: "¿Realmente quieres borrar todo?",
          ok: {
            push: true,
            color: "cyan-8",
          },
          cancel: {
            push: true,
            color: "negative",
          },
          persistent: true,
        })
        .onOk(() => {
          this.delete();
        })
        .onOk(() => {
          this.$q.notify({
            message: "Lista Borrada",
            color: "red",
            icon: "delete_outline",
            position: "top",
          });
        })
        .onCancel(() => {
          return;
        })
        .onDismiss(() => {
          return;
        });
    },
  },
  computed: {
    ...mapState("storeList", ["total"]),
  },
};
</script>

<style>
.totales {
  -webkit-text-stroke: 1px black;
}
</style>
