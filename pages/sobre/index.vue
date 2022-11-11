<template>
    <div class="flex flex-col">
        <BarraNavegacao />
        <div class="div-container">
            <div class="w-4/5">
                <main id="contudo_principal_pagina" class="flex flex-col">
                    <span class="texto-comum">EEEEEEEEEEEEEEE</span>
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
import Footer from '../../components/Footer.vue';

export default Vue.extend({
    name: "Sobre",
    components: { BarraNavegacao, Footer, GoogleAd }
})
</script>