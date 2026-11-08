<template>
  <nav class="pagination" aria-label="Paginação de produtos">
    <button
      class="pagination-button"
      :disabled="paginaAtual === 1"
      aria-label="Página anterior"
      @click="$emit('mudar', paginaAtual - 1)"
    >
      ‹ Anterior
    </button>

    <ul class="pagination-list">
      <li v-for="pagina in paginas" :key="pagina">
        <button
          :class="['pagination-button', { atual: pagina === paginaAtual }]"
          :aria-label="'Página ' + pagina"
          :aria-current="pagina === paginaAtual ? 'page' : null"
          @click="$emit('mudar', pagina)"
        >
          {{ pagina }}
        </button>
      </li>
    </ul>

    <button
      class="pagination-button"
      :disabled="paginaAtual === totalPaginas"
      aria-label="Próxima página"
      @click="$emit('mudar', paginaAtual + 1)"
    >
      Próxima ›
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalPaginas: { type: Number, required: true },
    paginaAtual: { type: Number, required: true },
  },
  emits: ['mudar'],
  computed: {
    paginas() {
      return Array.from({ length: this.totalPaginas }, (_, i) => i + 1)
    },
  },
}
</script>
