<template>
  <div class="q-pa-lg">
    <!-- <q-option-group
      class="text-grey-2 text-subtitle1"
      v-model="group"
      :options="options"
      :color="options.color"
    />
    <q-btn
      class="q-ml-md q-mt-md text-subtitle1"
      color="cyan-8"
      text-color="white"
      label="Cambiar"
      @click="change"
    /> -->

    <div class="row items-center">
      <p class="q-mt-md text-white">Lista Simple</p>
      <q-toggle
        size="lg"
        color="yellow"
        false-value="lista"
        true-value="supermercado"
        v-model="group"
        @click="change"
        keep-color
      />
      <p class="q-mt-md text-yellow">Lista con precio</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      group: null,
      options: [
        {
          label: "Lista simple",
          value: "lista",
          color: "yellow-12",
        },
        {
          label: "Lista con precio",
          value: "supermercado",
          color: "light-green-13",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["storeMode/getOption"]),
    change() {
      this["storeMode/getOption"](this.group);
      if (this.group === "lista") {
        this.$q.notify({
          message: "LISTA SIMPLE",
          textColor: "black",
          color: "yellow-12",
          position: "top",
        });
      } else if (this.group === "supermercado") {
        this.$q.notify({
          message: "LISTA CON PRECIO",
          textColor: "black",
          color: "light-green-13",
          position: "top",
        });
      }
    },
  },
  computed: {
    ...mapState(["storeMode/modoLista", "storeMode/modoSupermercado"]),
    update() {
      if (this["storeMode/modoLista"] === true) {
        this.group = "lista";
      } else if (this["storeMode/modoSupermercado"] === true) {
        this.group = "supermercado";
      }
    },
  },
  created() {
    //this.group = this["storeMode/option"];
    /* if (this["storeMode/modoLista"] === true) {
      this.group = "lista";
    } else if (this["storeMode/modoSupermercado"] === true) {
      this.group = "supermercado";
    } */

    this.update;
  },
};
</script>

<style></style>
