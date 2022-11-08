<!-- Please remove this file from your project -->
<template>
    <nav id="content_inicio" class="flex flex-col self-center">
        <img id="imagem_logo" class="my-5 w-10/12 h-auto self-center" src="../assets/imagens/deep-sea-jellyfish-logo-preto.png" alt="Logo do site" />
        <div class="flex flex-row justify-evenly text-2xl font-semibold">
            <NuxtLink to="">Início</NuxtLink>
            <span>|</span>
            <NuxtLink to="">Artigos</NuxtLink>
            <span>|</span>
            <NuxtLink to="">Cursos</NuxtLink>
            <span>|</span>
            <NuxtLink to="">Sobre</NuxtLink>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'BarraNavegacao',
    // data() {
    //     return {
    //         links: {}
    //     };
    // },
    // mounted() {
    //     this.links = {}
    // },
    // methods: {
    //     renderLinks() {

    //     }
    // }
}
</script>
    