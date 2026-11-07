angular.module('loja.directives').directive('toastContainer', function (toastService) {
  return {
    restrict: 'E',
    scope: {},
    template:
      '<div class="toast-container" aria-live="polite">' +
      '  <div ng-repeat="toast in toasts track by toast.id" class="toast toast-{{ toast.tipo }}"' +
      '       role="{{ toast.tipo === \'erro\' ? \'alert\' : \'status\' }}">' +
      '    <span aria-hidden="true">{{ icones[toast.tipo] }}</span>' +
      '    <p>{{ toast.mensagem }}</p>' +
      '    <button class="toast-close" ng-click="fechar(toast.id)" aria-label="Fechar notificação">×</button>' +
      '  </div>' +
      '</div>',
    link: function (scope) {
      scope.toasts = toastService.lista
      scope.icones = { sucesso: '✔', erro: '✖', info: 'ℹ' }

      scope.fechar = function (id) {
        toastService.remover(id)
      }
    },
  }
})