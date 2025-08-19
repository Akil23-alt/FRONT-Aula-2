import {defineStore} from 'pinia'

export const useMainStore = defineStore ('main',{
    state: () => ({
        nome: 'Maria',
        preco: 100,
        desconto: 10,
        dataAtual: new Date().toLocaleDateString()
    })
})

