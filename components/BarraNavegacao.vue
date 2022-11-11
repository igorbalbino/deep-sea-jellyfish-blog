<!-- Please remove this file from your project -->
<template>
    <nav id="content_inicio" class="flex flex-col self-center">
        <img id="imagem_logo" class="my-5 w-10/12 h-auto self-center" src="../assets/imagens/deep-sea-jellyfish-logo-preto.png" alt="Logo do site" />
        <hr width="85%" class="nav-line" />
        <div class="flex flex-row justify-evenly text-2xl font-semibold my-7">
            <NuxtLink to="/">Início</NuxtLink>
            <span>|</span>
            <NuxtLink to="/artigo">Artigos</NuxtLink>
            <span>|</span>
            <NuxtLink to="/cursos">Cursos</NuxtLink>
            <span>|</span>
            <NuxtLink to="/sobre">Sobre</NuxtLink>
        </div>
        <hr width="85%" class="nav-line" />
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
    