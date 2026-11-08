angular.module('loja.directives').directive('pagination', function () {
  return {
    restrict: 'E',
    scope: {
      totalPaginas: '<',
      paginaAtual: '<',
      aoMudar: '&',
    },
    template:
      '<nav class="pagination" aria-label="Paginação de produtos">' +
      '  <button class="pagination-button" ng-click="irPara(paginaAtual - 1)"' +
      '          ng-disabled="paginaAtual === 1" aria-label="Página anterior">‹ Anterior</button>' +
      '  <ul class="pagination-list">' +
      '    <li ng-repeat="pagina in paginas()">' +
      '      <button class="pagination-button" ng-class="{ atual: pagina === paginaAtual }"' +
      '              ng-click="irPara(pagina)" aria-label="Página {{ pagina }}"' +
      '              aria-current="{{ pagina === paginaAtual ? \'page\' : undefined }}">{{ pagina }}</button>' +
      '    </li>' +
      '  </ul>' +
      '  <button class="pagination-button" ng-click="irPara(paginaAtual + 1)"' +
      '          ng-disabled="paginaAtual === totalPaginas" aria-label="Próxima página">Próxima ›</button>' +
      '</nav>',
    link: function (scope) {
      scope.paginas = function () {
        var lista = []
        for (var i = 1; i <= scope.totalPaginas; i++) lista.push(i)
        return lista
      }

      scope.irPara = function (pagina) {
        scope.aoMudar({ pagina: pagina })
      }
    },
  }
})