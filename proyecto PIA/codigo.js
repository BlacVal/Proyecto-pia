function generateCode() {
    // Generar un código de 6 dígitos de manera aleatoria
    const generatedNumber = Math.floor(100000 + Math.random() * 900000);
    const generatedCode = generatedNumber.toString().substring(0, 6);
  
    // Actualizar el campo de entrada con el código generado
    document.getElementById('generatedCode').value = generatedCode;
  }
  
  document.querySelector('.checkout').addEventListener('click', function() {
    // Obtener el valor del código generado
    const code = document.getElementById('generatedCode').value;
  
    // Verificar si el código tiene una longitud de 6 caracteres
    if (code.length === 6) {
      // Mostrar un mensaje en una ventana emergente
      alert('¡Su préstamo ha sido realizado!');
    }
  });
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
  