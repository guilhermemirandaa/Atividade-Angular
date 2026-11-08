<template>
  <div class="accordion">
    <div v-for="(item, indice) in itens" :key="item.titulo" class="accordion-item">
      <h3 class="accordion-heading">
        <button
          :id="'acc-botao-' + indice"
          class="accordion-button"
          :aria-expanded="aberto === indice"
          :aria-controls="'acc-painel-' + indice"
          @click="alternar(indice)"
        >
          {{ item.titulo }}
          <span aria-hidden="true">{{ aberto === indice ? '−' : '+' }}</span>
        </button>
      </h3>

      <div
        :id="'acc-painel-' + indice"
        role="region"
        :aria-labelledby="'acc-botao-' + indice"
        :aria-hidden="aberto !== indice"
        :class="['accordion-panel', { aberto: aberto === indice }]"
      >
        <div class="accordion-conteudo">
          <p>{{ item.conteudo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    itens: { type: Array, required: true },
  },
  data() {
    return {
      aberto: null,
    }
  },
  methods: {
    alternar(indice) {
      this.aberto = this.aberto === indice ? null : indice
    },
  },
}
</script>
