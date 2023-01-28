<template>
  <q-layout view="hHh LpR fFf">
    <Header />

    <Drawer :rutas="rutas" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer :rutas="rutas" />
  </q-layout>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Drawer from "../components/layout/Drawer.vue";
import Footer from "../components/layout/Footer.vue";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Drawer,
    Footer,
  },
  computed: {
    ...mapState("storePages", ["rutas"]),
  },
};
</script>
