<template>
  <Inicio />
</template>

<script lang="ts">
import Vue from 'vue'
import Inicio from '~/components/Inicio.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { Inicio }
})
</script>
