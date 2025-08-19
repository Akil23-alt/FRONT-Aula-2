<template>

  <div>
    <h1>Bem-vinda, {{ store.nome }}</h1>
    <p>Data atual: {{ store.dataAtual }}</p>
    <p>Preço com desconto: {{ store.preco - store.desconto }}</p>
  </div>

</template>
<script>
import { useMainStore } from '../stores/mainStore' 
export default {
  name: 'About', 
  setup() {
    const store = useMainStore() 
    return { store } 
  }
}

</script>
