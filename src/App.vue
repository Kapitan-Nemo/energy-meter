<template>
  <ApplianceMain />
</template>

<script setup>
import "@/scss/app.scss";
import ApplianceMain from "./components/ApplianceMain.vue";
</script>

<style lang="scss">
#app {
  @include max-lg {
    padding: 30px 0 0 0;
  }
  padding: 50px 0 0 0;
  overflow: hidden;
  position: relative;
}
</style>
