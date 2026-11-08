angular.module('loja.directives').directive('dropdownMenu', function ($document) {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      opcoes: '<',
      aoSelecionar: '&',
    },
    template:
      '<div class="dropdown" ng-keydown="teclado($event)">' +
      '  <span id="dropdown-label" class="dropdown-label">{{ label }}</span>' +
      '  <button class="dropdown-button" aria-expanded="{{ aberto }}" aria-controls="dropdown-lista"' +
      '          aria-describedby="dropdown-label" ng-click="alternar()">' +
      '    {{ selecionado }}' +
      '    <span aria-hidden="true">{{ aberto ? \'▲\' : \'▼\' }}</span>' +
      '  </button>' +
      '  <ul id="dropdown-lista" class="dropdown-list" ng-if="aberto" aria-label="{{ label }}">' +
      '    <li ng-repeat="opcao in opcoes">' +
      '      <button class="dropdown-option" ng-class="{ selecionada: opcao === selecionado }"' +
      '              aria-current="{{ opcao === selecionado ? \'true\' : undefined }}"' +
      '              ng-click="escolher(opcao)">{{ opcao }}</button>' +
      '    </li>' +
      '  </ul>' +
      '</div>',
    link: function (scope, elemento) {
      scope.aberto = false
      scope.selecionado = scope.opcoes[0]

      scope.alternar = function () {
        scope.aberto = !scope.aberto
      }

      scope.escolher = function (opcao) {
        scope.selecionado = opcao
        scope.aberto = false
        scope.aoSelecionar({ opcao: opcao })
      }

      scope.teclado = function (evento) {
        if (evento.key === 'Escape') scope.aberto = false
      }

      function fecharAoClicarFora(evento) {
        if (!elemento[0].contains(evento.target)) {
          scope.$apply(function () {
            scope.aberto = false
          })
        }
      }

      $document.on('click', fecharAoClicarFora)

      scope.$on('$destroy', function () {
        $document.off('click', fecharAoClicarFora)
      })
    },
  }
})