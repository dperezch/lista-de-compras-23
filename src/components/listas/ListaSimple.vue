<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zommOut"
  >
    <q-list separator>
      <q-item
        v-ripple
        v-for="(producto, index) of productos"
        :key="producto.index"
      >
        <q-item-section
          class="q-ml-md text-weight-medium text-blue-grey-1 text-h6"
        >
          {{ producto.nombre }}
        </q-item-section>

        <q-btn
          flat
          icon="edit"
          class="text-yellow-12"
          @click="actualizar(index, producto)"
        />

        <q-btn
          side
          top
          round
          size="md"
          color="red"
          text-color="white"
          icon="delete_outline"
          class="q-mr-xl"
          @click="borrar(index, producto.total, producto.nombre)"
        />
      </q-item>
    </q-list>
  </transition>

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-input
          class="text-subtitle1"
          label="Producto"
          v-model.trim="datos.nombre"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="red" v-close-popup />
        <q-btn
          flat
          :disabled="bloquear"
          label="Actualizar"
          color="teal"
          v-close-popup
          @click="nuevosDatos"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    productos: Array,
  },
  data() {
    return {
      confirm: false,
      datos: {
        nombre: "",
        precio: null,
        cantidad: null,
        total: null,
        indice: null,
      },
      precioActual: null,
    };
  },
  methods: {
    ...mapActions([
      "storeList/getIndex",
      "storeList/getTotal",
      "storeList/getCambiar",
    ]),
    borrar(indice, total, nombre) {
      this.$q
        .dialog({
          title: "Eliminar",
          message: `realmente quieres eliminar ${nombre} ?`,
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
          this["storeList/getIndex"](indice);
          this["storeList/getTotal"](total);
        })
        .onOk(() => {
          this.$q.notify({
            message: "PRODUCTO BORRADO",
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
    nuevosDatos() {
      this.datos.total = this.datos.precio * this.datos.cantidad;
      //console.log('datos supuestamente nuevos ', this.datos)
      this["storeList/getTotal"](this.precioActual);
      this["storeList/getCambiar"](this.datos);
      this.datos = {
        nombre: "",
        precio: null,
        cantidad: null,
        total: null,
        indice: null,
      };
      this.$q.notify({
        message: "PRODUCTO ACTUALIZADO",
        color: "warning",
        icon: "edit",
        position: "top",
      });
    },
    actualizar(indice, producto) {
      //console.log(producto)
      this.datos.nombre = producto.nombre;
      this.datos.precio = producto.precio;
      this.datos.cantidad = producto.cantidad;
      this.datos.total = producto.precio * producto.cantidad;
      this.precioActual = producto.precio * producto.cantidad;
      this.datos.indice = indice;
      //console.log('datos capturados ', this.datos)
      //console.log('el total es ', this.precioActual, 'y el  indice es ', this.indiceActual)
      this.confirm = true;
    },
  },
  computed: {
    ...mapState("storeList", ["totales", "total"]),
    bloquear() {
      if (this.datos.nombre === "") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style></style>
