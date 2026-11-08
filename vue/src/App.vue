<template>
  <a href="#conteudo" class="pular-link">Pular para o conteúdo</a>

  <header class="cabecalho">
    <div class="cabecalho-conteudo">
      <p class="logo">Loja Virtual</p>
      <nav class="menu" aria-label="Menu principal">
        <ul>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#detalhes">Detalhes</a></li>
          <li><a href="#faq">Dúvidas</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="conteudo" class="conteudo">
    <h1 class="pular-link">Loja Virtual</h1>

    <section id="produtos" class="card card-largo" aria-labelledby="titulo-produtos">
      <h2 id="titulo-produtos">Produtos</h2>

      <div class="filtros">
        <Dropdown label="Categoria" :opcoes="categorias" @selecionar="trocarCategoria" />

        <div class="busca">
          <label for="busca">Buscar produto</label>
          <input id="busca" v-model="busca" type="search" placeholder="Ex.: fone" />
        </div>
      </div>

      <p class="resultado">{{ filtrados.length }} produto(s) encontrado(s)</p>

      <ul class="produtos">
        <li v-for="produto in produtosDaPagina" :key="produto.id" class="produto">
          <h3>{{ produto.nome }}</h3>
          <p>{{ produto.categoria }}</p>
          <p class="preco">{{ formatarMoeda(produto.preco) }}</p>
          <button class="botao" @click="adicionarAoCarrinho(produto)">Adicionar ao carrinho</button>
        </li>
      </ul>

      <Pagination
        v-if="totalPaginas > 1"
        :total-paginas="totalPaginas"
        :pagina-atual="paginaAtual"
        @mudar="paginaAtual = $event"
      />
    </section>

    <section id="detalhes" class="card" aria-labelledby="titulo-detalhes">
      <h2 id="titulo-detalhes">Detalhes do produto</h2>
      <Tabs :abas="abas" />
    </section>

    <section class="card" aria-labelledby="titulo-upload">
      <h2 id="titulo-upload">Enviar foto do produto</h2>
      <ProgressBar :valor="progresso" label="Upload da imagem" />
      <div class="botoes">
        <button class="botao" :disabled="enviando" @click="iniciarUpload">
          {{ enviando ? 'Enviando...' : 'Simular upload' }}
        </button>
      </div>
    </section>

    <section id="faq" class="card" aria-labelledby="titulo-faq">
      <h2 id="titulo-faq">Perguntas frequentes</h2>
      <Accordion :itens="perguntas" />
    </section>

    <section class="card" aria-labelledby="titulo-notificacoes">
      <h2 id="titulo-notificacoes">Notificações</h2>
      <p>Veja os três tipos de aviso da loja.</p>
      <div class="botoes">
        <button class="botao botao-sucesso" @click="$toast.mostrar('Pedido confirmado!', 'sucesso')">Sucesso</button>
        <button class="botao botao-erro" @click="$toast.mostrar('Pagamento recusado.', 'erro')">Erro</button>
        <button class="botao botao-info" @click="$toast.mostrar('Frete grátis hoje.', 'info')">Info</button>
      </div>
    </section>
  </main>

  <footer class="rodape">
    <p>© 2026 Loja Virtual. Atividade de Tópicos Avançados em Programação.</p>
  </footer>

  <ToastContainer />
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import ToastContainer from './components/ToastContainer.vue'
import Tabs from './components/Tabs.vue'
import Dropdown from './components/Dropdown.vue'
import Pagination from './components/Pagination.vue'
import Accordion from './components/Accordion.vue'
import { categorias, produtos, abas, perguntas } from './data/produtos.js'

export default {
  name: 'App',
  components: { ProgressBar, ToastContainer, Tabs, Dropdown, Pagination, Accordion },
  data() {
    return {
      categorias: [],
      produtos: [],
      abas: [],
      perguntas: [],
      categoria: 'Todas',
      busca: '',
      paginaAtual: 1,
      porPagina: 4,
      progresso: 0,
      enviando: false,
    }
  },
  computed: {
    filtrados() {
      return this.produtos.filter((produto) => {
        const daCategoria = this.categoria === 'Todas' || produto.categoria === this.categoria
        const daBusca = produto.nome.toLowerCase().includes(this.busca.toLowerCase())
        return daCategoria && daBusca
      })
    },
    totalPaginas() {
      return Math.ceil(this.filtrados.length / this.porPagina)
    },
    produtosDaPagina() {
      const inicio = (this.paginaAtual - 1) * this.porPagina
      return this.filtrados.slice(inicio, inicio + this.porPagina)
    },
  },
  watch: {
    busca() {
      this.paginaAtual = 1
    },
  },
  methods: {
    formatarMoeda(valor) {
      return 'R$ ' + valor.toFixed(2).replace('.', ',')
    },
    trocarCategoria(categoria) {
      this.categoria = categoria
      this.paginaAtual = 1
      this.$toast.mostrar('Categoria: ' + categoria, 'info')
    },
    adicionarAoCarrinho(produto) {
      this.$toast.mostrar(produto.nome + ' adicionado ao carrinho!', 'sucesso')
    },
    iniciarUpload() {
      this.progresso = 0
      this.enviando = true

      const timer = setInterval(() => {
        this.progresso += 10
        if (this.progresso >= 100) {
          clearInterval(timer)
          this.enviando = false
          this.$toast.mostrar('Upload concluído!', 'sucesso')
        }
      }, 300)
    },
  },
  created() {
    this.categorias = categorias
    this.produtos = produtos
    this.abas = abas
    this.perguntas = perguntas
  },
}
</script>
