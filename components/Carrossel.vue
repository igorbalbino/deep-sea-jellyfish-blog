<!-- Please remove this file from your project -->
<template>
    <div>
        <div id="arrow-left" class="arrow"></div>
        <div class="slide">
            <!-- <img :src="imagemAtual" /> -->
            <img src="../assets/imagens/code_large.jpg" class="h-auto max-w-3xl" /><!--test-->
        </div>
        <div id="arrow-right" class="arrow"></div>
    </div>
</template>

<script>
export default {
    name: 'Carrossel',
    data() {
        return {
            isMobile: false,
            imagensDesktop: ['../assets/imagens/code_large.jpg','../assets/imagens/code_meeting_large.jpg',
                        '../assets/imagens/code_python_large.jpg'],
            imagensMobile: ['../assets/imagens/code_small.jpg','../assets/imagens/code_meeting_small.jpg',
                        '../assets/imagens/code_python_small.jpg'],
            imagens: null
        };
    },
    mounted() {
        this.isMobile = this.getDeviceType()
        this.rotateImage()
    },
    watch: {

    },
    methods: {
        getDeviceType() {
            const ua = navigator.userAgent;
            if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return true;
            if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/
            .test(ua)) {
                return true;
            }
            return false;
        },
        rotateImage() {
            if(this.isMobile) {
                this.imagens = this.imagensMobile
            }
            else {
                this.imagens = this.imagensDesktop
            }
        }
    }
}
</script>