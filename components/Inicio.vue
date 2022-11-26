<!-- Please remove this file from your project -->
<template>
  <div id="conteudo_inicio" class="flex flex-col">
    <BarraNavegacao />
    <div class="div-container">
      <div class="w-4/5">
        <main id="contudo_principal_pagina" class="flex flex-col">
          <span class="texto-comum">
            O blog das <strong>PROFUNDEZAS</strong> com tutoriais, informações, boas praticas e dicas para você que tem interesse 
            no mundo da tecnologia. Descobriremos juntos como <strong>fazer aplicações novas com tecnologias distintas, 
            preparar ambientes, criar apps e sites, integrar SDK Android, configurar full node Bitcoin, 
            full node da rede Tor</strong> e muito mais.
            Veja nossos destaques!
          </span>
          <div class="p-8 flex flex-row justify-between">
            <Carrossel />
            <span class="texto-comum">sssssss</span>
          </div>
          <span class="texto-comum">aaaaaaa</span>
          <div class="flex flex-col">
            <div id="newsletter-form" class="flex flex-col">
              <span class="texto-comum">Inscreva-se na nossa Newsletter para não ficar de fora de nada!</span>
              <br />
              <span id="newsletter-nome" class="texto-comum">Nome: </span><input v-model="nome" type="text" class="border-2 border-red-900" />
              <br />
              <span id="newsletter-email" class="texto-comum">Email: </span><input v-model="email" type="text" class="border-2 border-red-900" />
              <input class="my-8 py-4 hover:bg-gray-400" type="submit" value="Inscrver" :onclick="addEmailToNewsletter()" />
            </div>
          </div>
        </main>
      </div>
      <GoogleAd />
    </div>
    <Footer />
  </div>
</template>

<script>
import BarraNavegacao from './BarraNavegacao.vue';
import Carrossel from './Carrossel.vue';
import GoogleAd from './GoogleAd.vue';
import Footer from './Footer.vue';
import { createRegister, getAllRegister } from '../server/firestore'

export default {
    name: "Inicio",
    components: { BarraNavegacao, Carrossel, GoogleAd, Footer },
    data() {
      return {
        nome: '',
        email: '',
        docs: []
      }
    },
    methods: {
      addEmailToNewsletter(){
        var res = createRegister('Newsletter', new Newsletter(this.nome, this.email, true).toString())
        console.log('res: ', res)
      }
    }
}
</script>
  