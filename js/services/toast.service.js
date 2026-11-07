angular.module('loja.services').factory('toastService', function ($timeout) {
  var lista = []

  function remover(id) {
    var indice = lista.findIndex(function (toast) {
      return toast.id === id
    })
    if (indice !== -1) lista.splice(indice, 1)
  }

  function mostrar(mensagem, tipo) {
    var toast = { id: Date.now() + Math.random(), mensagem: mensagem, tipo: tipo || 'info' }
    lista.push(toast)
    $timeout(function () {
      remover(toast.id)
    }, 3000)
  }

  return {
    lista: lista,
    mostrar: mostrar,
    remover: remover,
  }
})