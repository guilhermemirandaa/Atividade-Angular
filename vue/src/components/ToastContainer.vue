<template>
  <div class="toast-container" aria-live="polite">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['toast', 'toast-' + toast.tipo]"
      :role="toast.tipo === 'erro' ? 'alert' : 'status'"
    >
      <span aria-hidden="true">{{ icones[toast.tipo] }}</span>
      <p>{{ toast.mensagem }}</p>
      <button class="toast-close" aria-label="Fechar notificação" @click="$toast.remover(toast.id)">×</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToastContainer',
  data() {
    return {
      icones: { sucesso: '✔', erro: '✖', info: 'ℹ' },
    }
  },
  computed: {
    toasts() {
      return this.$toast.lista
    },
  },
}
</script>
