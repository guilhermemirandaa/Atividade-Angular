angular.module('loja.filters').filter('moeda', function () {
  return function (valor) {
    return 'R$ ' + Number(valor).toFixed(2).replace('.', ',')
  }
})