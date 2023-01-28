<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <!-- <q-banner class="bg-red text-white text-center rounded-borders">
      <q-icon name="cancel" size="md" class="q-mb-xs" />
      <span class="text-h6"> Lista vacía </span>
    </q-banner> -->
    <div class="empty column justify-center items-center q-mt-xl">
      <q-img :src="url" style="height: 160px; max-width: 160px" />
      <h6 class="text-white">Lista vacia</h6>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      url: "empty.svg",
    };
  },
};
</script>

<style></style>
