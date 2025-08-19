// Importa o Vue (a ferramenta que usamos para montar o site)
import { createApp } from 'vue'



// Importa o arquivo principal do site (onde está a estrutura do site)
import App from './App.vue'

import router from './router'


const app = createApp(App)

app.use(createPinia())

  // Adiciona as rotas no site (permite navegar entre páginas)
app.use(router)

  // Mostra o site dentro da parte <div id="app"> no index.html
app.mount('#app')

