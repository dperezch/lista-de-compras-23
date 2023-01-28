<template>

    <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
    >

        <div class="full-width row wrap justify-center items-center content-center">
            <q-card 
                class="q-mx-xs q-my-sm"
                v-for="(producto, index) of productos" :key="producto.index"
            >
                <q-card-section class="bg-purple text-white">
                    <div class="text-h6"> {{producto.nombre}} ${{producto.precio}} </div>
                    <div class="text-subtitle1"> 
                        Cant: {{producto.cantidad}} - Total: {{producto.total}}
                    </div>
                </q-card-section>

                <q-card-actions align="around">
                    <q-btn 
                        flat 
                        icon="edit" 
                        class="text-teal"  
                        @click="actualizar(index, producto)"
                    />
                    <q-btn 
                        flat 
                        icon="delete" 
                        class="text-red" 
                        @click="borrar(index, producto.total, producto.nombre)"
                    />
                </q-card-actions>
            </q-card>

            <q-dialog v-model="confirm" persistent >
                <q-card>
                    <q-card-section class="row items-center">
                    <q-input 
                        class="text-subtitle1"
                        label="Producto"
                        v-model.trim="datos.nombre"  
                    />
                    <q-input 
                        class="text-subtitle1"
                        type="number"
                        label="Precio"
                        v-model.number="datos.precio"  
                    />
                    <q-input 
                        class="text-subtitle1"
                        type="number"
                        label="Cantidad"
                        v-model.number="datos.cantidad"  
                    />
                    
                    </q-card-section>

                    <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="red" v-close-popup />
                    <q-btn flat :disabled="bloquear" label="Actualizar" color="teal" v-close-popup @click="nuevosDatos" />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            
        </div>
    
    </transition>

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    props: {
        productos: Array
    },
    data(){
        return{
            confirm: false,
            datos: {
                nombre: '',
                precio: null,
                cantidad: null,
                total: null,
                indice: null
            },
            precioActual:null
            
        }
    },
    methods:{
        ...mapActions(['storeList/getIndex', 'storeList/getTotal', 'storeList/getCambiar']),

        borrar (indice, total, nombre) {
            this.$q.dialog({
                title: 'Eliminar',
                message: `realmente quieres eliminar ${nombre} ?`,
                ok: {
                    push: true,
                    color: 'cyan-8'
                },
                cancel: {
                    push: true,
                    color: 'negative'
                },
                persistent: true
            }).onOk(() => {
                this['storeList/getIndex'](indice)
                this['storeList/getTotal'](total)
            }).onOk(() => {
                this.$q.notify({
                message: 'PRODUCTO BORRADO',
                color: 'red',
                icon: 'delete_outline',
                position: 'top'
            })
            }).onCancel(() => {
                return
            }).onDismiss(() => {
                return
            })
        },


        actualizar(indice, producto){
            //console.log(producto) 
            this.datos.nombre = producto.nombre
            this.datos.precio = producto.precio
            this.datos.cantidad = producto.cantidad
            this.datos.total = producto.precio * producto.cantidad
            this.precioActual = producto.precio * producto.cantidad
            this.datos.indice = indice
            //console.log('datos capturados ', this.datos)
            //console.log('el total es ', this.precioActual, 'y el  indice es ', this.indiceActual)
            this.confirm = true 
        },

        nuevosDatos(){
            this.datos.total = this.datos.precio * this.datos.cantidad
            //console.log('datos supuestamente nuevos ', this.datos)
            this['storeList/getTotal'](this.precioActual)
            this['storeList/getCambiar'](this.datos)
            this.datos = {
                nombre: "",
                precio: null,
                cantidad: null,
                total: null,
                indice: null
            } 
            this.$q.notify({
                message: 'PRODUCTO ACTUALIZADO',
                color: 'warning',
                icon: 'edit',
                position: 'top'
            })
        }

    },
    computed: {
        ...mapState('storeList', ['totales','total']),
        bloquear(){
            if (this.datos.nombre === "" || this.datos.precio === "" || this.datos.cantidad === "") {
            return true
            } return false
        }
    }

}
</script>

