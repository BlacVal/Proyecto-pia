// script.js
window.onload = function() {
    var mensaje = "En esta página puede hacer su préstamo";
    alert(mensaje); // Muestra un cuadro de diálogo con el mensaje indicado.
}
// Ejemplo de uso de animaciones con jQuery
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  