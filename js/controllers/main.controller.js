angular.module('loja.controllers').controller('MainController', function (
  $scope,
  $interval,
  $filter,
  produtoService,
  toastService
) {
  $scope.categorias = produtoService.categorias
  $scope.abas = produtoService.abas

  $scope.categoria = 'Todas'
  $scope.busca = ''

  $scope.filtrados = function () {
    var porCategoria = produtoService.filtrarPorCategoria($scope.categoria)
    return $filter('filter')(porCategoria, { nome: $scope.busca })
  }

  $scope.trocarCategoria = function (categoria) {
    $scope.categoria = categoria
    toastService.mostrar('Categoria: ' + categoria, 'info')
  }

  $scope.adicionarAoCarrinho = function (produto) {
    toastService.mostrar(produto.nome + ' adicionado ao carrinho!', 'sucesso')
  }

  $scope.notificar = function (mensagem, tipo) {
    toastService.mostrar(mensagem, tipo)
  }

  $scope.progresso = 0
  $scope.enviando = false

  $scope.iniciarUpload = function () {
    $scope.progresso = 0
    $scope.enviando = true

    var timer = $interval(function () {
      $scope.progresso += 10
      if ($scope.progresso >= 100) {
        $interval.cancel(timer)
        $scope.enviando = false
        toastService.mostrar('Upload concluído!', 'sucesso')
      }
    }, 300)
  }
})