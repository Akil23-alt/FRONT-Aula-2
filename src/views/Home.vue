<template>
<div>
  <h1>Ola, {{ store.nome }}</h1>
  <p>Ola, {{ store.dataAtual }}</p>
  <p>Ola, {{ store.preco - store.desconto }}</p>
</div>
</template>

<script>
import { useMainStore } from '../stores/mainStore'

export default {
 name: 'Home',

setup() {
  const store = useMainStore()
  return { store }
 }
}

</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
}
.card {
  background-color: #75c2ee;
  padding: 1rem;
  border: 1px solid #ccc;
  width: 30%;
  text-align: center;
}
</style>


