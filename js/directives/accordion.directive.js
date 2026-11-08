angular.module('loja.directives').directive('accordion', function () {
  return {
    restrict: 'E',
    scope: {
      itens: '<',
    },
    template:
      '<div class="accordion">' +
      '  <div class="accordion-item" ng-repeat="item in itens">' +
      '    <h3 class="accordion-heading">' +
      '      <button id="acc-botao-{{ $index }}" class="accordion-button" ng-click="alternar($index)"' +
      '              aria-expanded="{{ aberto === $index }}" aria-controls="acc-painel-{{ $index }}">' +
      '        {{ item.titulo }}' +
      '        <span aria-hidden="true">{{ aberto === $index ? \'−\' : \'+\' }}</span>' +
      '      </button>' +
      '    </h3>' +
      '    <div id="acc-painel-{{ $index }}" role="region" aria-labelledby="acc-botao-{{ $index }}"' +
      '         class="accordion-panel" ng-class="{ aberto: aberto === $index }" aria-hidden="{{ aberto !== $index }}">' +
      '      <div class="accordion-conteudo"><p>{{ item.conteudo }}</p></div>' +
      '    </div>' +
      '  </div>' +
      '</div>',
    link: function (scope) {
      scope.aberto = null

      scope.alternar = function (indice) {
        scope.aberto = scope.aberto === indice ? null : indice
      }
    },
  }
})