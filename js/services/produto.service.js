angular.module('loja.services').service('produtoService', function () {
  this.categorias = ['Todas', 'Eletrônicos', 'Roupas', 'Livros', 'Casa']

  this.produtos = [
    { id: 1, nome: 'Fone Bluetooth', preco: 199.9, categoria: 'Eletrônicos' },
    { id: 2, nome: 'Camiseta Básica', preco: 49.9, categoria: 'Roupas' },
    { id: 3, nome: 'Dom Casmurro', preco: 29.9, categoria: 'Livros' },
    { id: 4, nome: 'Luminária LED', preco: 89.9, categoria: 'Casa' },
    { id: 5, nome: 'Smartwatch', preco: 349.9, categoria: 'Eletrônicos' },
    { id: 6, nome: 'Calça Jeans', preco: 129.9, categoria: 'Roupas' },
    { id: 7, nome: 'O Pequeno Príncipe', preco: 24.9, categoria: 'Livros' },
    { id: 8, nome: 'Jogo de Panelas', preco: 249.9, categoria: 'Casa' },
    { id: 9, nome: 'Teclado Mecânico', preco: 279.9, categoria: 'Eletrônicos' },
    { id: 10, nome: 'Moletom', preco: 159.9, categoria: 'Roupas' },
    { id: 11, nome: '1984', preco: 39.9, categoria: 'Livros' },
    { id: 12, nome: 'Almofada', preco: 39.9, categoria: 'Casa' },
  ]

  this.abas = [
    {
      titulo: 'Descrição',
      conteudo: 'Fone de ouvido sem fio com cancelamento de ruído e bateria de 30 horas.',
    },
    {
      titulo: 'Especificações',
      itens: ['Bluetooth 5.3', 'Peso: 250g', 'Cor: Preto'],
    },
    {
      titulo: 'Avaliações',
      conteudo: '★★★★☆ 4,5 de 5 — 128 avaliações.',
    },
  ]

  this.perguntas = [
    { titulo: 'Qual o prazo de entrega?', conteudo: 'De 3 a 7 dias úteis para capitais. Até 12 dias úteis para o interior.' },
    { titulo: 'Como faço uma troca?', conteudo: 'Você tem 7 dias após o recebimento. Acesse "Meus pedidos" e solicite a troca.' },
    { titulo: 'Quais formas de pagamento?', conteudo: 'Pix, boleto e cartão de crédito em até 10x sem juros.' },
    { titulo: 'O frete é grátis?', conteudo: 'Sim, para compras acima de R$ 199,00.' },
  ]

  this.filtrarPorCategoria = function (categoria) {
    if (categoria === 'Todas') return this.produtos
    return this.produtos.filter(function (produto) {
      return produto.categoria === categoria
    })
  }
})