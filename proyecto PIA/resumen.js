const enlace = document.querySelector('.enlace');
const resumenContainer = document.getElementById('resumen-container');

enlace.addEventListener('mouseover', () => {
    const resumen = enlace.getAttribute('data-resumen');
    resumenContainer.textContent = resumen;
    resumenContainer.style.display = 'block';
});

enlace.addEventListener('mouseout', () => {
    resumenContainer.style.display = 'none';
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
  