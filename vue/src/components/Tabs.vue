<template>
  <div class="tabs">
    <div class="tabs-list" role="tablist" @keydown="teclado">
      <button
        v-for="(aba, indice) in abas"
        :key="aba.titulo"
        :id="'tab-' + indice"
        role="tab"
        :class="['tabs-button', { ativa: ativa === indice }]"
        :aria-selected="ativa === indice"
        :aria-controls="'painel-' + indice"
        :tabindex="ativa === indice ? 0 : -1"
        @click="selecionar(indice)"
      >
        {{ aba.titulo }}
      </button>
    </div>

    <div :id="'painel-' + ativa" role="tabpanel" :aria-labelledby="'tab-' + ativa" class="tabs-panel">
      <p v-if="abaAtual.conteudo">{{ abaAtual.conteudo }}</p>
      <ul v-if="abaAtual.itens">
        <li v-for="item in abaAtual.itens" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    abas: { type: Array, required: true },
  },
  data() {
    return {
      ativa: 0,
    }
  },
  computed: {
    abaAtual() {
      return this.abas[this.ativa]
    },
  },
  methods: {
    selecionar(indice) {
      this.ativa = indice
    },
    teclado(evento) {
      const total = this.abas.length
      if (evento.key === 'ArrowRight') this.ativa = (this.ativa + 1) % total
      if (evento.key === 'ArrowLeft') this.ativa = (this.ativa - 1 + total) % total
    },
  },
}
</script>
