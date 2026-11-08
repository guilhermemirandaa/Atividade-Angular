<template>
  <div ref="raiz" class="dropdown" @keydown.esc="aberto = false">
    <span id="dropdown-label" class="dropdown-label">{{ label }}</span>
    <button
      class="dropdown-button"
      :aria-expanded="aberto"
      aria-controls="dropdown-lista"
      aria-describedby="dropdown-label"
      @click="aberto = !aberto"
    >
      {{ selecionado }}
      <span aria-hidden="true">{{ aberto ? '▲' : '▼' }}</span>
    </button>

    <ul v-if="aberto" id="dropdown-lista" class="dropdown-list" :aria-label="label">
      <li v-for="opcao in opcoes" :key="opcao">
        <button
          :class="['dropdown-option', { selecionada: opcao === selecionado }]"
          :aria-current="opcao === selecionado ? 'true' : null"
          @click="escolher(opcao)"
        >
          {{ opcao }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    label: { type: String, default: '' },
    opcoes: { type: Array, required: true },
  },
  emits: ['selecionar'],
  data() {
    return {
      aberto: false,
      selecionado: this.opcoes[0],
    }
  },
  methods: {
    escolher(opcao) {
      this.selecionado = opcao
      this.aberto = false
      this.$emit('selecionar', opcao)
    },
    fecharAoClicarFora(evento) {
      if (!this.$refs.raiz.contains(evento.target)) {
        this.aberto = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.fecharAoClicarFora)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.fecharAoClicarFora)
  },
}
</script>
