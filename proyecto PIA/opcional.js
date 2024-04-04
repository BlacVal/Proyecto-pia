document.getElementById("myForm").onsubmit = function() {
    var optionalField = document.getElementById("campo").value;
    // Puedes hacer algo con el valor de optionalField si lo necesitas
    console.log("Campo Opcional: " + optionalField);
};
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
  