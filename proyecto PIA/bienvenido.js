// script.js
window.onload = function() {
    var mensajeBienvenida = "Bienvenido a nuestra página";
    alert(mensajeBienvenida); // Muestra un cuadro de diálogo de bienvenida.

    var comentario = prompt("Por favor, introduzca su comentario sobre la página:");
    
    if (comentario !== null && comentario !== "") {
        alert("Gracias por tu comentario: " + comentario); // Muestra un cuadro de diálogo con el comentario ingresado.
    } else {
        alert("No ingresaste ningún comentario."); // Muestra un cuadro de diálogo si el usuario no ingresó un comentario.
    }
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
  


