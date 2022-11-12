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
            <form @submit.prevent="" class="flex flex-col">
              <span class="texto-comum">Inscreva-se na nossa Newsletter para não ficar de fora de nada!</span>
              <br />
              <span class="texto-comum">Nome: </span><input type="text" v-model="name" class="border-2 border-red-900" />
              <br />
              <span class="texto-comum">Email: </span><input type="text" v-model="email" class="border-2 border-red-900" />
              <button type="submit"><strong>Inscrever</strong></button>
            </form>
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
import firestoreDb from '../server/firestore'
import { collection, addDoc } from "firebase/firestore"

export default {
    name: "Inicio",
    components: { BarraNavegacao, Carrossel, GoogleAd, Footer },
    data() {
      return {
        mainText: '',
        name: '',
        emailsCollection: collection(firestoreDb, 'newsletter')
      }
    },
    mounted() {
      var res = this.makeTest()
      console.log('CREATEEEEEEEEEEEEEEEEEEED!')
    },
    methods: {
      async makeTest() {
        try {
          const docRef = await addDoc(collection(firestoreDb, "newsletter"), {
            email: "test@test.com",
            ativo: "N"
          })
          Promise.resolve("Document written with ID: ", docRef.id)
        } catch (e) {
          Promise.reject("Error adding document: ", e)
        }
      }
    }
}
</script>
  