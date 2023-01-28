<template>
  <q-page v-touch-swipe.touch.left="swipeLeft" class="flex flex-center column">
    <Input
      :datos="datos"
      :incorrecto="incorrecto"
      :procesar="procesar"
      v-if="modoSupermercado"
    />

    <InputSimple
      :datos="datos"
      :bloquearSimple="bloquearSimple"
      :procesarSimple="procesarSimple"
      v-if="modoLista"
    />

    <Options />

    <!-- <Help v-if="modoLista" />

    <Helps v-if="modoSupermercado" /> -->
  </q-page>
</template>

<script>
import Input from "../components/ingreso-datos/Input.vue";
import InputSimple from "../components/ingreso-datos/InputSimple.vue";
import Help from "../components/ingreso-datos/Help.vue";
import Helps from "../components/ingreso-datos/Helps.vue";
import { mapState, mapActions } from "vuex";
import Options from "../components/settings/Options.vue";

export default {
  components: {
    Input,
    InputSimple,
    Help,
    Helps,
    Options,
  },
  data() {
    return {
      datos: {
        nombre: "",
        precio: "",
        cantidad: "",
        total: null,
        tachar: false,
      },
    };
  },
  computed: {
    ...mapState("storeMode", ["option", "modoSupermercado", "modoLista"]),
    incorrecto() {
      if (
        this.datos.nombre === "" ||
        this.datos.precio === "" ||
        this.datos.cantidad === ""
      ) {
        return true;
      }
      return false;
    },
    bloquearSimple() {
      if (this.datos.nombre === "") {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions(["storeList/getProductos"]),
    procesar() {
      this.datos.total = eval(this.datos.precio * this.datos.cantidad);
      this["storeList/getProductos"](this.datos);
      this.$q.notify({
        message: "ITEM AGREGADO",
        color: "cyan-8",
        icon: "check",
        position: "top",
      });
      this.datos = {
        nombre: "",
        precio: null,
        cantidad: null,
        total: null,
      };
    },
    procesarSimple() {
      this.datos.precio = 1;
      this.datos.cantidad = 1;
      this.datos.total = eval(this.datos.precio * this.datos.cantidad);
      this["storeList/getProductos"](this.datos);
      this.$q.notify({
        message: "ITEM AGREGADO",
        color: "cyan-8",
        icon: "check",
        position: "top",
      });
      this.datos = {
        nombre: "",
        precio: null,
        cantidad: null,
        total: null,
      };
    },
    swipeLeft() {
      this.$router.push("/lista");
    },
  },
};
</script>
