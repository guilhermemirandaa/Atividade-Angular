angular.module('loja.services', [])
angular.module('loja.filters', [])
angular.module('loja.directives', ['loja.services'])
angular.module('loja.controllers', ['loja.services'])

angular.module('lojaApp', [
  'loja.services',
  'loja.filters',
  'loja.directives',
  'loja.controllers',
])