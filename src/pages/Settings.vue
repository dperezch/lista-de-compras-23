<template>
  <q-page
    v-touch-swipe.touch.right="swipeRight"
    padding
    class="flex flex-center column"
  >
    <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zommOut"
    >
      <Donate key="donar" />
    </transition>
  </q-page>
</template>

<script>
import Options from "../components/settings/Options.vue";
import Donate from "../components/settings/Donate.vue";

export default {
  components: {
    Options,
    Donate,
  },
  methods: {
    swipeRight() {
      this.$router.push("/lista");
    },
  },
};
</script>
