<template>
    <q-drawer
        show-if-above
        bordered
        class="text-blue-grey-6"
        :breakpoint="767"
        :width="250"
    >
            <q-item-label 
                header
                class="text-subtitle1"
            >
                Navegación
            </q-item-label>
            <q-item 
                v-for="ruta in rutas" :key="ruta.label"
                :to="ruta.to" 
                exact 
                clickable
            >
                <q-item-section avatar>
                    <q-icon 
                        :name="ruta.icon" 
                        size="md"
                    />
                </q-item-section>
                <q-item-section >
                    <q-item-label
                        class="text-subtitle1" 
                    >
                        {{ruta.label}}
                    </q-item-label>
                </q-item-section>
            </q-item>
    </q-drawer>
</template>

<script>
export default {
    props: {
        rutas: Array
    }

}
</script>

<style>
.q-item.q-router-link--active, .q-item--active {
    color: #f44336;
}
</style>