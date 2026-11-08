import { reactive } from 'vue'

const toastService = reactive({
  lista: [],

  mostrar(mensagem, tipo = 'info') {
    const id = Date.now() + Math.random()
    this.lista.push({ id, mensagem, tipo })
    setTimeout(() => this.remover(id), 3000)
  },

  remover(id) {
    const indice = this.lista.findIndex((toast) => toast.id === id)
    if (indice !== -1) this.lista.splice(indice, 1)
  },
})

export default toastService
