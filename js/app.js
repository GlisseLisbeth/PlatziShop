(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("suscribeForm");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());

function mostrarModal () {
  const noMostrarModal = JSON.parse(localStorage.noMostrarModal)

  if (!noMostrarModal) {
    $('#modalOferta').modal('show')
  }

  $('#btnNoRegistrar').click(function (ev) {
    localStorage.noMostrarModal = true
  })
}