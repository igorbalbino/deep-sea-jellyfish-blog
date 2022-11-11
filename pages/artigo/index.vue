<template>
    <div class="flex flex-col">
        <BarraNavegacao />
        <div class="div-container">
            <div class="w-4/5">
                <main id="contudo_principal_pagina" class="flex flex-col">
                <Materia />
                </main>
            </div>
            <GoogleAd />
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BarraNavegacao from '../../components/BarraNavegacao.vue';
import GoogleAd from '../../components/GoogleAd.vue';
import Materia from '../../components/Materia.vue';
import Footer from '../../components/Footer.vue';

export default Vue.extend({
    name: "Artigos",
    components: { BarraNavegacao, Footer, GoogleAd, Materia }
})
</script>