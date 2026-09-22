document.addEventListener('DOMContentLoaded', function() {
  const formReserva = document.getElementById('form-reserva');
  
  if (formReserva) {
    formReserva.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const destino = document.getElementById('destino').value;
      const fecha = document.getElementById('fecha').value;
      const personas = document.getElementById('personas').value;

      // Mensaje de éxito interactivo
      alert(`¡Muchas gracias, ${nombre}! 🌟\nTu pre-reserva para "${destino}" el día ${fecha} (${personas} personas) ha sido registrada con éxito en el sistema de la agencia.`);
      
      this.reset();
    });
  }
});