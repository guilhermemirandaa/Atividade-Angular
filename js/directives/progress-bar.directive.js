angular.module('loja.directives').directive('progressBar', function () {
  return {
    restrict: 'E',
    scope: {
      valor: '<',
      label: '@',
    },
    template:
      '<div class="progress">' +
      '  <div class="progress-header">' +
      '    <span>{{ label }}</span>' +
      '    <span>{{ percentual() }}%</span>' +
      '  </div>' +
      '  <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100"' +
      '       aria-valuenow="{{ percentual() }}" aria-label="{{ label }}">' +
      '    <div class="progress-fill" ng-style="{ width: percentual() + \'%\' }"></div>' +
      '  </div>' +
      '</div>',
    link: function (scope) {
      scope.percentual = function () {
        return Math.min(100, Math.max(0, scope.valor || 0))
      }
    },
  }
})