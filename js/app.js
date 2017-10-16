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

const $filtrosToggle = $('#filtrosToggle')

$filtrosToggle.click(function (ev) {
  ev.preventDefault()

  const $i = $filtrosToggle.find('span.oi')
  const $isDown = $i.hasClass('oi-chevron-bottom')

  if($isDown) {
    $i.removeClass('oi-chevron-bottom').addClass('oi-chevron-top')
  } else {
    $i.removeClass('oi-chevron-top').addClass('oi-chevron-bottom')
  }

})