angular.module('loja.directives').directive('tabs', function () {
  return {
    restrict: 'E',
    scope: {
      abas: '<',
    },
    template:
      '<div class="tabs">' +
      '  <div class="tabs-list" role="tablist" ng-keydown="teclado($event)">' +
      '    <button ng-repeat="aba in abas" id="tab-{{ $index }}" role="tab"' +
      '            class="tabs-button" ng-class="{ ativa: ativa === $index }"' +
      '            aria-selected="{{ ativa === $index }}" aria-controls="painel-{{ $index }}"' +
      '            tabindex="{{ ativa === $index ? 0 : -1 }}" ng-click="selecionar($index)">' +
      '      {{ aba.titulo }}' +
      '    </button>' +
      '  </div>' +
      '  <div id="painel-{{ ativa }}" role="tabpanel" aria-labelledby="tab-{{ ativa }}" class="tabs-panel">' +
      '    <p ng-if="abas[ativa].conteudo">{{ abas[ativa].conteudo }}</p>' +
      '    <ul ng-if="abas[ativa].itens">' +
      '      <li ng-repeat="item in abas[ativa].itens">{{ item }}</li>' +
      '    </ul>' +
      '  </div>' +
      '</div>',
    link: function (scope) {
      scope.ativa = 0

      scope.selecionar = function (indice) {
        scope.ativa = indice
      }

      scope.teclado = function (evento) {
        var total = scope.abas.length
        if (evento.key === 'ArrowRight') scope.ativa = (scope.ativa + 1) % total
        if (evento.key === 'ArrowLeft') scope.ativa = (scope.ativa - 1 + total) % total
      }
    },
  }
})